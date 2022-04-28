import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { format } from 'date-fns';
import { server } from './mocks/server';
import { rest } from 'msw';

const setup = () => render(<App />);

describe('Check if app works correctly', () => {
  it('When the user enters the app, the app should show the Picture of the Day', async () => {
    setup();

    const today = format(new Date(), 'yyyy-MM-dd');
    const image = await screen.findByAltText('Test Image of today');
    const inputDate = screen.getByTestId('date-input');

    expect(image).toBeInTheDocument();
    expect(inputDate).toHaveValue(today);
  });

  it(`When the user selects a specific date with the format YYYY-MM-DD, 
  the app should show the picture of the day for the given date.`, async () => {
    setup();

    const inputDate = screen.getByTestId('date-input');
    fireEvent.change(inputDate, {
      target: {
        value: '2021-01-01',
      },
    });
    const image = await screen.findByAltText('Test 2021-01-01');
    expect(image).toHaveAttribute('src', 'https://test.image.com');
  });

  it(`When the app fetches the API, and there is an unexpected error, the app should show a message: 
  There was an error, please try again.`, async () => {
    const errorMessage = 'There was an error, please try again.';
    server.use(
      rest.get('https://api.nasa.gov/planetary/apod', async (_, res, ctx) => {
        return res.once(ctx.status(500), ctx.json({ msg: errorMessage }));
      })
    );

    setup();

    const p = await screen.findByText(errorMessage);
    expect(p).toHaveTextContent(errorMessage);
  });

  it(`When the user selects an invalid date value, 
  the app should show a message from the API response (e.g. a day after the current date.)`, async () => {
    const today = format(new Date(), 'LLL dd, yyyy');
    const errorMessage = `Date must be between Jun 16, 1995 and ${today}.`;
    server.use(
      rest.get('https://api.nasa.gov/planetary/apod', async (_, res, ctx) => {
        return res.once(ctx.status(400), ctx.json({ msg: errorMessage }));
      })
    );

    setup();

    const p = await screen.findByText(errorMessage);
    expect(p).toHaveTextContent(errorMessage);
  });

  it(`Render correctly the header, footer and main content in the app.`, async () => {
    setup();
    const header = await screen.findByRole('heading', { level: 1 });
    expect(header).toHaveTextContent('Picture of the day');

    const footer = await screen.getByRole('contentinfo');
    expect(footer).toHaveTextContent(
      'Project created during Wizeline Academy React Testing Bootcamp'
    );

    const explanationText = await screen.findByText('Test explanation');
    expect(explanationText).toBeInTheDocument();

    const imageTitle = await screen.findByText('Test Image of today');
    expect(imageTitle).toBeInTheDocument();

    const image = await screen.findByAltText('Test Image of today');
    expect(image).toHaveAttribute(
      'src',
      'https://apod.nasa.gov/apod/image/2204/JupiterDarkSpot_JunoTT_1080.jpg'
    );
  });
});
