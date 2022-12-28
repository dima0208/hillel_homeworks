import PoprTypes from 'prop-types';
import { useState, useEffect } from 'react';

export function Lesson({ value }) {
  const [count, setCount] = useState(5);
  const [text, setText] = useState('');

  const onClickHandler = () => {
    setCount(count + 1);
  };

  const onChangeHandler = (e) => {
    setText((prev) => {
      return prev.length < e.target.value.length ? e.target.value : prev;
    });
  };

  useEffect(() => {
    // console.log('Coconut has updated');
    return () => {
      // console.log('component Lesson has unmount');
    };
  }, [text]);

  return (
    <div>
      {value && <div>Start from {value}</div>}
      <div>Count: {count}</div>
      <button onClick={onClickHandler}>Increase</button>
      <input value={text} onChange={onChangeHandler} />
    </div>
  );
}

Lesson.propTypes = {
  value: PoprTypes.number,
};
