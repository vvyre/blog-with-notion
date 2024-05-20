import { useBooleanState } from '@syyu/util/react';
import { useEffect } from 'react';

export const useClipboard = () => {
  const [isCopied, setCopied, restore] = useBooleanState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied();
    } catch (err) {}
  };

  useEffect(() => {
    if (!isCopied) return;

    let timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      restore();
    }, 1500);
    return () => clearTimeout(timer);
  }, [isCopied]);

  return { copy, isCopied };
};
