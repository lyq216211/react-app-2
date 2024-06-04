import React, { useState } from "react";

const useToggle = () => {
  const [state, setState] = useState(false);
  return [
    state,
    {
      toggle: () => setState((prev) => !prev),
      setTrue: () => setState(true),
      setFalse: () => setState(false),
    },
  ] as const;
};

export default useToggle;
