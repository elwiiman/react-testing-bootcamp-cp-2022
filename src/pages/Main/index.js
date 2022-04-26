import React from 'react';
import DateInput from '../../components/DateInput';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import useInput from '../../hooks/useInput';
import { apikey, baseURL } from '../../config/services/APOD';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import {
  OverallContainer,
  DateContainer,
  StyledImage,
  DataContainer,
  Description,
  ImageContainer,
  TitleContainer,
  StyledMainPage,
} from './styled';
import notFoundImg from '../../images/notFound.png';

function Main() {
  const today = format(new Date(), 'yyyy-MM-dd');
  const date = useInput(today);

  const { isLoading, error, data = {}, isError } = useQuery(
    ['repoData', date.value],

    async () => {
      let response;

      response = await fetch(`${baseURL}?api_key=${apikey}&date=${date.value}`);

      if (!response.ok) {
        return response.text().then(text => {
          const jsonError = JSON.parse(text);
          throw new Error(jsonError.msg);
        });
      }

      return response.json();
    },
    { retry: 0, refetchOnWindowFocus: false }
  );

  const { url = '', title = '', explanation = '' } = data;

  return (
    <StyledMainPage>
      <TitleContainer>
        <Title text={'Picture of the day'} centered />
      </TitleContainer>

      <OverallContainer>
        <DateContainer>
          <DateInput name="date" value={date.value} onChange={date.onChange} />
        </DateContainer>

        <DataContainer>
          <ImageContainer>
            <StyledImage src={!isError ? url : notFoundImg} alt={title} />
          </ImageContainer>

          {!isError && <Description>{explanation}</Description>}
          {isError && <Description>{error.message}</Description>}
        </DataContainer>
      </OverallContainer>

      <Footer text="Project created during Wizeline Academy React Testing Bootcamp" />
    </StyledMainPage>
  );
}

export default Main;
