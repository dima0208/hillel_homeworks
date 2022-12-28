import { useState, useEffect } from 'react';

export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let TimerId;
    TimerId = setInterval(() => {
      console.log('tick');
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(TimerId);
    };
  }, []);

  return <div>{count} seconds</div>;
};
