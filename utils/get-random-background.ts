import { vars } from '@/_lib/styles/themes.css';
import { objectKeys } from '@syyu/util';
import { getRandomInt } from './get-random-int';
import { useRandomNumber } from '@syyu/util/react';

const N = objectKeys(vars.notion).length;
const num = getRandomInt([0, N]);
export const getRandomBackground = {
  backgroundColor: vars.notion[objectKeys(vars.notion)[num]],
};

export const useRandomBackground = () => {
  const P = useRandomNumber([0, N], [], 'int');

  return {
    backgroundColor: vars.notion[objectKeys(vars.notion)[P]],
  };
};
