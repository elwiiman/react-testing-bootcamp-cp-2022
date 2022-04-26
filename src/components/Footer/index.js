import React from 'react';
import PropTypes from 'prop-types';
import { StyledFooter } from './styled';

const propTypes = {
  text: PropTypes.string.isRequired,
};

function Footer({ text }) {
  return <StyledFooter>{text}</StyledFooter>;
}

Footer.propTypes = propTypes;

export default Footer;
