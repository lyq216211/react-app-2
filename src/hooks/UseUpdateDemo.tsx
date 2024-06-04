import React from "react";
import useUpdate from "./useUpdate";

const UseUpdateDemo = () => {
  const update = useUpdate();
  return (
    <div>
      <div>Time: {Date.now()}</div>
      <button type="button" onClick={update} style={{ marginTop: 8 }}>
        update
      </button>
    </div>
  );
};

export default UseUpdateDemo;
