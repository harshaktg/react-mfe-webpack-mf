import React from 'react';

const Button = ({ name, onClick }) => (
  <input type="button" value={name} onClick={onClick}></input>
);

export default Button;
