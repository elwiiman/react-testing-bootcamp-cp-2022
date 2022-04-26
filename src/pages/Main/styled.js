import styled from 'styled-components';
import { fontTypes } from '../../config/font';

export const StyledMainPage = styled.div`
  background: white;
`;

export const TitleContainer = styled.header`
  padding: 10px;
`;

export const OverallContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DateContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 220px;
`;

export const DataContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 50%;
`;
export const StyledImage = styled.img`
  padding: 5px;
  width: 100%;
  margin: 5px;
  max-height: 500px;
  object-fit: fill;
  border-radius: 10px;
`;

export const Description = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 5px;
  width: 50%;
  ${fontTypes.paragraph};
`;
