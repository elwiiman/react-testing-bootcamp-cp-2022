import styled from 'styled-components';
import { fontTypes } from '../../config/font';
import PropTypes from 'prop-types';

export const StyledTitle = styled.h1`
  display: flex;
  justify-content: ${(props) => (props.centered ? 'center' : '')};
  ${fontTypes.titleDesktop};
`;

StyledTitle.displayName = 'StyledTitle';
StyledTitle.propTypes = {
  centered: PropTypes.bool,
};
