import React, { useState } from "react";

const useRafState = () => {
  const [state, setState] = useState();

  return [rafState, setRafState] as const;
};

export default useRafState;
