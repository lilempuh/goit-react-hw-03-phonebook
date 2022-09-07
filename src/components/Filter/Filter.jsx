import React from 'react';
import { LabelStyled, Input } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <LabelStyled>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </LabelStyled>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Filter;
