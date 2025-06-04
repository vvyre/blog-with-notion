'use client'

import { useIsomorphicLayoutEffect } from '@frfla/react-hooks'
import { useEffect, useRef, useState } from 'react'
import { useBackgroundStore } from './store'
import { TITLES } from 'styles/fonts.css'
import { aws } from 'constants/envs'

export function BackgroundCanvas({ ...props }) {
  const backgroundCanvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef<{ mX: number; mY: number }>({
    mX: 0,
    mY: 0,
  }) //상태로 추적하지 않음

  const { src } = useBackgroundStore()
  const [[width, height], setBodySize] = useState<[number, number]>([0, 0])

  useIsomorphicLayoutEffect(() => {
    setBodySize([window.innerWidth, window.innerHeight])

    const handleResize = () => setBodySize([window.innerWidth, window.innerHeight])

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      (mousePositionRef.current = { mX: e.clientX, mY: e.clientY })

    window?.addEventListener('mousemove', handleMouseMove)

    return () => window?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1

  useEffect(() => {
    const context = backgroundCanvasRef?.current?.getContext('2d')

    if (!src) return
    if (!context) return

    // 캔버스 해상도 적용

    backgroundCanvasRef.current!.style.width = `${width}px`
    backgroundCanvasRef.current!.style.height = `${height}px`

    context.setTransform(1, 0, 0, 1, 0, 0)
    context.scale(dpr, dpr)

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src

    let animationFrameId: number = Number.MIN_SAFE_INTEGER

    function drawText() {
      context!.font = `600 0.8rem ${TITLES}`
      context!.fillStyle = 'white'
      context!.textAlign = 'right'
      context!.textBaseline = 'middle'

      const TXT = src
        .replace(`${aws.cloudfrontRoot}/${aws.bucketDirectory}`, '')
        .replace('.webp', '')
        .replaceAll('-', ' ')
        .toLocaleUpperCase()

      context?.fillText(TXT, width - 24, height - 24)
    }

    function draw() {
      context?.clearRect(0, 0, width, height)

      //마우스 이벤트 추적 및 중심점 찾는 것은 body 기준으로 (scale 전)
      const middleX = width / 2
      const middleY = height / 2

      // TODO: 마우스 이벤트에 반응하는 기능
      // const { mX, mY } = mousePositionRef.current

      // 화면 중심 기준 background-cover
      const scaleWidth = width / img.naturalWidth
      const scaleHeight = height / img.naturalHeight
      const scale = Math.max(scaleWidth, scaleHeight)
      const drawWidth = img.naturalWidth * scale
      const drawHeight = img.naturalHeight * scale

      context?.save()

      context?.translate(middleX, middleY)
      context?.transform(1, 0, 0, 1, 0, 0)

      // 캔버스 중앙에 이미지 중심이 놓이도록
      context?.drawImage(img, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight)
      context?.restore()
      context?.save()

      //필터
      context!.globalAlpha = 0.3 // 반투명도
      context!.fillStyle = '#000000'
      context!.fillRect(0, 0, width, height)
      context?.restore()

      drawText()
    }

    if (img.complete) draw()
    img.onload = () => draw()

    animationFrameId = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [src, width, height, dpr])

  return (
    <canvas
      ref={backgroundCanvasRef}
      width={width * dpr}
      height={height * dpr}
      {...props}
    />
  )
}
