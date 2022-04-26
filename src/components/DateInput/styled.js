import styled from 'styled-components';
import { fontTypes } from '../../config/font';

export const StyledDateInput = styled.input.attrs(props => ({
  type: 'date',
}))`
  width: 100%;
  ${fontTypes.paragraph}
`;
StyledDateInput.displayName = 'StyledDateInput';
