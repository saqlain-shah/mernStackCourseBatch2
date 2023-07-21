import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    if (count >= 1) {
      setCount((prev) => prev - 1);
      console.log(count);
    }
    // count === 0 ? setCount(0) : setCount(count - 1);
    // console.log(count);
  }
  return (
    <div>
      <button onClick={() => increment()}>+</button>
      <p>{count}</p>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
};
