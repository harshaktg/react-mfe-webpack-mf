import React from 'react';
import Button from './Button';

const ButtonGroup = ({ setColor }) => {
  return (
    <>
      <Button name="Blue" onClick={() => setColor('blue')} />
      <Button name="Red" onClick={() => setColor('red')} />
    </>
  );
};

export default ButtonGroup;
