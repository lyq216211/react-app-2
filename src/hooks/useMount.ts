import React, { useEffect } from "react";

const useMount = (fn: () => void): void => {
  useEffect(() => {
    console.log("effect...");

    fn();
  }, []);
};

export default useMount;
