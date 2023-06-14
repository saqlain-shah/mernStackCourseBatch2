import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function HandleIncrement() {
    setCount(count + 1);
  }
  function HandleDecrement() {
    count === 0 ? setCount(0) : setCount(count - 1);
  }
  return (
    <>
      <h1>Counter App</h1>
      <button onClick={HandleIncrement}> Increment</button>
      <h1>{count}</h1>
      <button onClick={HandleDecrement}> Decrement</button>
    </>
  );
}
