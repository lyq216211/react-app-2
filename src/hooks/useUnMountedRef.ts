import React, { useEffect, useRef, useState } from "react";

const useUnMountedRef = () => {
  // const [value, setValue] = useState(false);
  const ref = useRef(false);
  useEffect(() => {
    return () => {
      // setValue(true);
      ref.current = true;
    };
  });
  return ref;
};

export default useUnMountedRef;
