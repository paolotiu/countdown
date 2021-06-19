import { useState } from 'react';

export type UseBooleanReturn = [
  boolean,
  {
    toFalse: () => void;
    toTrue: () => void;
    toggle: () => void;
  }
];
export const useBoolean = (initial = false): UseBooleanReturn => {
  const [bool, setBool] = useState(initial);

  const toFalse = () => setBool(false);
  const toTrue = () => setBool(true);
  const toggle = () => setBool((prev) => !prev);

  return [bool, { toFalse, toTrue, toggle }];
};
