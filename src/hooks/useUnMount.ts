import React, { useEffect, useRef } from "react";
import useLatest from "./useLatest";
// 闭包陷阱
// 留一个作业，根据这个hook中如何获取最新值解决闭包陷阱的方法。写（抽象一个）一个useLatest的hook
// 专门用来获取最新值，解决闭包陷阱的hook
const useUnMount = (fn: () => void) => {
  // const fnRef = useRef(fn);
  // fnRef.current = fn;

  const fnRef = useLatest(fn);
  useEffect(() => {
    return () => fnRef.current();
  }, []);
};

export default useUnMount;
