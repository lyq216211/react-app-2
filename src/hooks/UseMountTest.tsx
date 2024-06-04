import React, { useEffect, useState, useRef } from "react";
import { message } from "antd";
import useMount from "./useMount";
import useUnMount from "./useUnMount";
import useCounter from "./useCounter";
import useUnmountedRef from "./useUnMountedRef";
import useMountedRef from "./useMountedRef";

const MyComponent = () => {
  const [current, { inc, dec, set, reset }] = useCounter(100, { min: 1, max: 10 });
  const fn = () => {
    message.info(current);
  };
  const unmountedRef = useUnmountedRef();
  const mountedRef = useMountedRef();
  useEffect(() => {
    setTimeout(() => {
      if (!unmountedRef.current) {
        message.info("component is alive");
      }
    }, 3000);
    setTimeout(() => {
      if (mountedRef) {
        message.info("component is alive 2");
      }
    }, 3000);
  }, []);
  useMount(() => {
    message.info("mount");
  });
  useUnMount(() => {
    message.info(current);
  });
  console.log("ref    ", mountedRef);

  return (
    <div>
      Hello World
      <div>
        <p>{current} [max: 10; min: 1;]</p>
        <div>
          <button
            type="button"
            onClick={() => {
              inc();
            }}
            style={{ marginRight: 8 }}
          >
            inc()
          </button>
          <button
            type="button"
            onClick={() => {
              dec();
            }}
            style={{ marginRight: 8 }}
          >
            dec()
          </button>
          <button
            type="button"
            onClick={() => {
              set(3);
            }}
            style={{ marginRight: 8 }}
          >
            set(3)
          </button>
          <button type="button" onClick={reset} style={{ marginRight: 8 }}>
            reset()
          </button>
        </div>
      </div>
    </div>
  );
};
const UseMountTest = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setState(!state)}>
        {state ? "unmount" : "mount"}
      </button>
      {state && <MyComponent />}
    </div>
  );
};

export default UseMountTest;
