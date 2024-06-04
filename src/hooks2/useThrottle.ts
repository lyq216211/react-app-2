import React from "react";

interface IOptions {
  wait: number;
  leading: boolean;
  trailing: boolean;
}
const useThrottle = <T>(value: T, options?: IOptions) => {
  const { wait = 1000, leading = true, trailing = true } = options || {};
  const [throttleValue, setThrottleValue];

  return;
};

export default useThrottle;
