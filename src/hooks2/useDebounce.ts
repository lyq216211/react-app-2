import React, { useState, useRef, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";

interface Options {
  wait: number;
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}
const useDebounce = <T>(value: T, options?: Options) => {
  const { wait = 300, leading = false, trailing = true, maxWait } = options || {};
  const [debounceValue, setDebounceValue] = useState(value);
  const refValue = useRef(value);
  refValue.current = value;
  const debounceSet = useCallback(
    debounce(
      () => {
        setDebounceValue(refValue.current);
      },
      wait,
      { leading, trailing, maxWait }
    ),
    [wait]
  );

  useEffect(() => {
    debounceSet();
  }, [value]);

  return debounceValue;
};

export default useDebounce;
