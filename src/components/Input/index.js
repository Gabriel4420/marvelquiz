/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ControladorTexto = styled.input`
  width:100%;
  max-width:350px;
  height:35px;
  font-size:16px;
  font-family:'Lato',Arial, Helvetica, sans-serif;
  font-weight:bold;
  background-color:transparent;
  outline:none;
  border: 1px solid white;
  padding:14px;
  margin-bottom:10px;
  color:white;
  border-radius: 40px;
  ::placeholder {
    color:white;
    font-weight:bold;
    font-size:16px;
  }

`;

// eslint-disable-next-line react/prop-types
export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <ControladorTexto
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
