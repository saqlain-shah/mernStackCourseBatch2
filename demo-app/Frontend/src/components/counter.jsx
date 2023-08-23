import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);
  function handleIncrement() {
    setCount(count + 1);
    console.log(count);
  }

  function handleDecrement() {
    count === 0 ? setCount(0) : setCount(count - 1);
    console.log(count);
  }

  return (
    <>
      <h1 style={{}}>Counter App</h1>
      <button onClick={handleIncrement}>Increment</button>
      <h1>{count}</h1>

      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
