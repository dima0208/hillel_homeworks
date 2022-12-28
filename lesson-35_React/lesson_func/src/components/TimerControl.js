import React, { useState, useEffect } from 'react';
import { DivAndButt } from './DivAndButt';
import { Timer } from './Timer';

export function TimerControl() {
  const [withTimer, setWithTimer] = useState(false);
  const [withButton, setWithButton] = useState(false);
  const [text, setText] = useState('');

  const onInputChange = (text) => {
    setText(() => ({
      text,
    }));
  };

  useEffect(() => {
    console.log('input has changed');
  }, [text]);

  return (
    <>
      <button onClick={() => setWithTimer(!withTimer)}>Start Timer</button>
      {withTimer && <Timer />}
      <button onClick={() => setWithButton(!withButton)}>Hide input</button>
      {withButton && <DivAndButt text={text} onInputChange={onInputChange} />}
    </>
  );
}
