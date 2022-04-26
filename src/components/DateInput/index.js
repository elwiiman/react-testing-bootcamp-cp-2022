import React from 'react';
import PropTypes from 'prop-types';
import { StyledDateInput } from './styled';

const propTypes = {
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function DateInput({ name, placeHolder, value, onChange }) {
  return (
    <StyledDateInput
      name={name}
      placeholder={placeHolder}
      value={value}
      type="date"
      onChange={onChange}
    />
  );
}

DateInput.propTypes = propTypes;

export default DateInput;
