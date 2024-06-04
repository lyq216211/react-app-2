import React, { useEffect, useRef, MutableRefObject } from "react";

const useMountedRef = (): boolean => {
  const ref = useRef(true);
  if (ref.current) {
    ref.current = false;
    return true;
  }
  return ref.current;
};

export default useMountedRef;
