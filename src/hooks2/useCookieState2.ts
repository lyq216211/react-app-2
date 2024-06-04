import React, { useState } from "react";
import Cookies from "js-cookie";

interface Options {}
type State = string | undefined;

type SetState = (
  newValue?: State | ((prevState?: State) => State),
  options?: Cookies.CookieAttributes
) => void;
const useCookieState2 = (key: string, options): [State, SetState] => {
  const [cookieVal, setCookieVal] = useState<State>(Cookies.get(key) || options.defaultValue);
  const setValue: SetState = (p) => {
    if (typeof p === "function") {
      setCookieVal((prev) => {
        Cookies.set(key, p(cookieVal));
        return p(cookieVal);
      });
    } else {
      setCookieVal((prev) => {
        Cookies.set(key, p);
        return p;
      });
    }
  };
  return [cookieVal, setValue];
};

export default useCookieState2;
