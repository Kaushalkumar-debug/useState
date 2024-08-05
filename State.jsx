import { useState } from "react";
import "./State.css";
const State = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleChange = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button id="game1" onClick={handleClick}>
        +
      </button>
      <button id="game" onClick={handleChange}>
        -
      </button>
    </div>
  );
};

export default State;
