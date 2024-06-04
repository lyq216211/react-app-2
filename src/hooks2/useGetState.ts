import { useLatest } from "ahooks";
import React, { useCallback, useState } from "react";

const useGetState = <T>(initialValue: T) => {
  const [count, setCount] = useState(initialValue);
  const countRef = useLatest(count);
  const getCount = useCallback(() => {
    return countRef.current;
  }, []);

  return [count, setCount, getCount];
};

export default useGetState;
