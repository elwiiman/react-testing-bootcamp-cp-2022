// src/mocks/handlers.js
import { rest } from 'msw';
import { format } from 'date-fns';

export const handlers = [
  rest.get(`https://api.nasa.gov/planetary/apod`, async (req, res, ctx) => {
    const date = req.url.searchParams.get('date');
    const today = format(new Date(), 'yyyy-MM-dd');

    if (date === '2021-01-01') {
      return res(
        ctx.status(200),
        ctx.json({
          date: '2021-01-01',
          explanation: 'Test 2021-01-01',
          hdurl:
            'https://apod.nasa.gov/apod/image/2204/JupiterDarkSpot_JunoTT_3298.jpg',
          media_type: 'image',
          service_version: 'v1',
          title: 'Test 2021-01-01',
          url: 'https://test.image.com',
        })
      );
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          date: today,
          explanation: 'Test explanation',
          hdurl:
            'https://apod.nasa.gov/apod/image/2204/JupiterDarkSpot_JunoTT_3298.jpg',
          media_type: 'image',
          service_version: 'v1',
          title: 'Test Image of today',
          url:
            'https://apod.nasa.gov/apod/image/2204/JupiterDarkSpot_JunoTT_1080.jpg',
        })
      );
    }
  }),
];
