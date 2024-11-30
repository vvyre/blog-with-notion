import type { DependencyList, EffectCallback } from 'react';
import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicLayoutEffect = (effect: EffectCallback, deps?: DependencyList) =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  typeof window === 'undefined' ? useEffect(effect, deps) : useLayoutEffect(effect, deps);
