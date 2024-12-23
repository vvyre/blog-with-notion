/* eslint-disable react-hooks/rules-of-hooks */
import { DependencyList, useEffect, useState } from 'react';

const randomInt = (num: number) => Math.floor(Math.random() * num);

export const getRandomInt = (range: [number, number]): number => {
  const [low, high] = range[0] < range[1] ? [range[0], range[1]] : [range[1], range[0]];

  return randomInt(high - low + 1) + low;
};

export const useRandomInt = (range: [number, number], deps: DependencyList, init?: number): number => {
  const [low, high] = range[0] < range[1] ? [range[0], range[1]] : [range[1], range[0]];

  const [num, setNum] = useState<number>(() => init ?? low);

  useEffect(() => {
    setNum(randomInt(high - low + 1) + low);
  }, [low, high, ...deps]);

  return num;
};
