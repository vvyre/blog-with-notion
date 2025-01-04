import { vars } from '@/_lib/styles/themes.css';
import { objectKeys } from '@syyu/util';
import { getRandomInt } from './get-random-int';

const N = objectKeys(vars.notion).length;
const num = getRandomInt([0, N]);
export const getRandomBackground = {
  backgroundColor: vars.notion[objectKeys(vars.notion)[num]],
};
