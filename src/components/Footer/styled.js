import styled from 'styled-components';
import { fontTypes } from '../../config/font';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 1px solid black;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #427aa1;
  color: white;
  ${fontTypes.caption}
`;
