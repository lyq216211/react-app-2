import React from "react";
import useCookieState from "./useCookieState2";

export default function App() {
  const [value, setValue] = useCookieState("useCookieStateUpdater", {
    defaultValue: "0",
  });

  return (
    <>
      <p>{value}</p>
      <button
        type="button"
        style={{ marginRight: "16px" }}
        onClick={() => setValue((v) => String(Number(v) + 1))}
      >
        inc +
      </button>
      <button
        type="button"
        style={{ marginRight: "16px" }}
        onClick={() => setValue((v) => String(Number(v) - 1))}
      >
        dec -
      </button>
      <button type="button" onClick={() => setValue("0")}>
        reset
      </button>
    </>
  );
}
