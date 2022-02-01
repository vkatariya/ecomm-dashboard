import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  let inceremantCount = () => {
    setCount(count + 1);
    // console.warn("plus");
  };
  let deceremantCount = () => {
    setCount(count - 1);
    // console.warn("minus");
  };

  return (
    <>
      <h1>Count :{count}</h1>

      <button onClick={inceremantCount} className="btn btn-success">
        +
      </button>
      <button onClick={deceremantCount} className="btn btn-danger">
        -
      </button>
    </>
  );
};

export default Counter;
