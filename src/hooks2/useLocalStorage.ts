import React, { useState } from "react";
interface Options<T> {
  defaultValue?: T | (() => T);
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
  onError?: (error: unknown) => void;
}

const useLocalStorage = <T>(key: string, options: Options<T>) => {
  const [value, setValue] = useState(localStorage.getItem(key) || options.defaultValue);
  const setMessage = (value: T) => {
    setValue((prev) => {
      localStorage.setItem(key, value);
    });
  };

  return [value, setMessage];
};

export default useLocalStorage;
