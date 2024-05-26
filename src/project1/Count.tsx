import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  console.log(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Count;
