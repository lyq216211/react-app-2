import React from "react";
import useToggle from "./useToggle";

export default () => {
  const [state, { toggle, setTrue, setFalse }] = useToggle();

  return (
    <div>
      <p>Effects:{`${state}`}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setTrue} style={{ margin: "0 8px" }}>
          Toggle True
        </button>
        <button type="button" onClick={setFalse}>
          Toggle False
        </button>
      </p>
    </div>
  );
};
