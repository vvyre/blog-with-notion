import { useBooleanState } from '@syyu/util/react'
import { useEffect } from 'react'

export const useClipboard = (duration?: number, onError?: () => any) => {
  const [isCopied, setCopied, restore] = useBooleanState(false)

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied()
    } catch (err) {
      onError && onError()
    }
  }

  useEffect(() => {
    if (!isCopied) return

    let timer: ReturnType<typeof setTimeout>
    duration &&
      duration > 0 &&
      (timer = setTimeout(() => {
        restore()
      }, duration))

    return () => {
      duration && duration > 0 && clearTimeout(timer)
    }
  }, [isCopied, duration])

  return { copy, isCopied, restoreState: restore }
}
