import React, { useState } from "react";

const useUpdate = () => {
  const [state, setState] = useState(0);

  return [
    state,
    () => {
      setState((prev) => prev + 1);
    },
  ];
};

export default useUpdate;
