import React, { useState } from "react";
import Cookies from "js-cookie";

const useCookieState = <T>(key: string) => {
  const [cookieVal, setCookieVal] = useState<string>(Cookies.get(key));
  const setMessage = (value: string) => {
    setCookieVal((prev) => {
      Cookies.set(key, value);
      return value;
    });
  };

  return [cookieVal, setMessage] as const;
};

export default useCookieState;
