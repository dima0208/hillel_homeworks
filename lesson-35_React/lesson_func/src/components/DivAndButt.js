import React, { useEffect } from 'react';

export function DivAndButt(props) {
  useEffect(() => {
    console.log('Input has mounted');

    return () => {
      console.log('Input has unmounted');
    };
  }, []);

  return (
    <div>
      <input
        value={props.text}
        onChange={(e) => props.onInputChange(e.target.value)}
      ></input>
    </div>
  );
}
