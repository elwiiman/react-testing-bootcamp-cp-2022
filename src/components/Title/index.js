import { StyledTitle } from './styled';

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
  centered: PropTypes.bool,
};

function Title({ text, centered }) {
  return <StyledTitle centered={centered}>{text}</StyledTitle>;
}

Title.propTypes = propTypes;

export default Title;
