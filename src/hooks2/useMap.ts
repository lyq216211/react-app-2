import React, { useState } from "react";

// interface Result<> {
//   set: (key: K, value: V) => void
// }
interface Iterable {}
const useMap = <K, V>(initialValue: Iterable<[K, V]>) => {
  let initialMap = new Map(initialValue);
  const [map, setMap] = useState(initialMap);

  return [
    map,
    {
      set: (key: K, value: V) => {
        const newMap = new Map(map);
        newMap.set(key, value);
        setMap(newMap);
      },
      setAll: (value) => setMap(new Map(value)),
      remove: (key) => {
        const newMap = new Map(map);
        newMap.delete(key);
        setMap(newMap);
      },
      reset: () => setMap(new Map(initialValue)),
      get: (key) => map.get(key),
    },
  ] as const;
};

export default useMap;
