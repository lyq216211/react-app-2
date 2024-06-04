import React, { useRef, MutableRefObject } from "react";

const useLatest = <T>(value: T): MutableRefObject<T> => {
  const valueRef = useRef(value);
  valueRef.current = value;

  return valueRef;
};

export default useLatest;
