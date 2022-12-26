import React, { useState } from "react";

const Counter = ({ props }) => {
  const [counter, setCounter] = useState(0);

  let increase = () => {
    setCounter(counter + 1);
  };

  let decrease = () => {
    setCounter(counter - 1);
  };

  return <div>{counter}</div>;
};

export default Counter;
