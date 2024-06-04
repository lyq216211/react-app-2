import React, { useState } from "react";
let a = 1;
let b = (a as unknown as string) + "1";

const useCounter = (initialValue: number, { min, max }: { min: number; max: number }) => {
  const [count, setCount] = useState(() => {
    console.log("usestate");
    if (initialValue > max) {
      return max;
    } else if (initialValue < min) {
      return min;
    } else {
      return initialValue;
    }
  });

  return [
    count,
    {
      inc: () => setCount((prev) => (prev < max ? prev + 1 : prev)),
      dec: () => setCount((prev) => (prev > min ? prev - 1 : prev)),
      set: (id) => setCount(id),
      reset: () => setCount(max),
    },
  ] as const;
};

export default useCounter;
