import { ThemeContext } from '@/_lib/context/theme-provider'
import { useLoadBackground } from '@/_lib/hooks/use-load-background'
import { useCategory } from '@/_lib/hooks/use-category'
import { useIsomorphicLayoutEffect } from '@syyu/util/react'
import { useRef, useContext, useEffect } from 'react'
import { useBackgroundStore } from './store'
import { HIDE } from '../navigation/navigation.css'

export function useBackgroundCanvas() {
  const { theme } = useContext(ThemeContext)
  const { setBrightness, setImageSrc, src, refs } = useBackgroundStore()
  const imgSrc = useLoadBackground(26)
  const { isPost, path } = useCategory()

  useEffect(() => {
    setImageSrc(imgSrc)
  }, [imgSrc, path])

  // 배경화면에 동적으로 영향을 받아야 하는 ref를 받아, 크기를 측정합니다.
  const targetLayouts = Array.from(refs.entries()).map(([k, ref]) => {
    if (!ref.current) return [k, null, null, null, null] as const

    const { top, right, bottom, left } = ref.current.getBoundingClientRect()
    return [k, top, right, bottom, left] as const
  })

  const canvasRef = useRef<HTMLCanvasElement>(null)

  //포스트를 보고 있는 경우
  useIsomorphicLayoutEffect(() => {
    if (!isPost) return

    const updated = new Map<string, number>()
    if (theme === 'light')
      Array.from(refs.entries()).map(([k, _]) => updated.set(k, 255))
    else Array.from(refs.entries()).map(([k, _]) => updated.set(k, 0))

    setBrightness(updated)
  }, [isPost, theme])

  //메인 화면의 랜덤 사진 배경인 경우
  useIsomorphicLayoutEffect(() => {
    if (isPost) return
    if (!canvasRef.current) return
    if (!src) return

    const ctx = canvasRef.current.getContext('2d')

    const IMG = new Image()
    IMG.crossOrigin = 'anonymous'
    IMG.src = src

    IMG.onload = () => {
      ctx!.drawImage(
        IMG,
        0,
        0,
        canvasRef.current!.width, //위에서 타입 처리했기 때문에 있다고 가정함
        canvasRef.current!.height
      )

      const updated = new Map<string, number>()
      targetLayouts.forEach(([k, top, right, bottom, left]) => {
        if (
          !k ||
          top == null ||
          right == null ||
          bottom == null ||
          left == null
        )
          return //해당하는 DOM이 없으면 로직 실행하지 않음

        const width = Math.max(0, right - left)
        const height = Math.max(0, bottom - top)

        if (width < 0 || height < 0) {
          updated.set(k, 0)
          return //해당하는 DOM이 이상하면 (?) 로직 실행하지 않음
        }
        const imageData = ctx!.getImageData(left, top, width, height)?.data
        let sumBrightness = 0

        //rgba 4채널
        for (let i = 0; i < imageData.length; i += 4) {
          const r = imageData[i]
          const g = imageData[i + 1]
          const b = imageData[i + 2]
          //명도 계산식 - 3채널만 사용
          const tempBrightness = 0.2126 * r + 0.7152 * g + 0.0722 * b
          sumBrightness += tempBrightness
        }

        const totalPixels = width * height
        const avrBrightness = sumBrightness / totalPixels

        updated.set(k, avrBrightness)
      })
      setBrightness(updated)
    }
  }, [src, isPost])

  return () => (
    <canvas
      id="background_image"
      width={500}
      height={400}
      className={HIDE}
      ref={canvasRef}
    />
  )
}
