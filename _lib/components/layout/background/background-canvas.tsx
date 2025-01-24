'use client'

import { useIsomorphicLayoutEffect } from '@syyu/util/react'
import { useEffect, useRef, useState } from 'react'
import { useBackgroundStore } from './store'

export function BackgroundCanvas({ ...props }) {
  const backgroundCanvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef<{ mX: number; mY: number }>({
    mX: 0,
    mY: 0,
  }) //상태로 추적하지 않음

  const { src } = useBackgroundStore()
  const [[width, height], setBodySize] = useState<[number, number]>([0, 0])

  useIsomorphicLayoutEffect(() => {
    setBodySize([
      typeof window !== 'undefined' ? window.innerWidth : 0,
      typeof window !== 'undefined' ? window.innerHeight : 0,
    ])
  }, [])

  useIsomorphicLayoutEffect(() => {
    const handleUpdate = () => {
      if (typeof window !== 'undefined') {
        const { left, top, right, bottom } =
          document.documentElement.getBoundingClientRect()
        const W = right - left || 0
        const H = bottom - top || 0
        setBodySize([W, H])
      }
    }

    window.addEventListener('resize', handleUpdate)

    return () => {
      window.removeEventListener('resize', handleUpdate)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      (mousePositionRef.current = { mX: e.clientX, mY: e.clientY })

    window?.addEventListener('mousemove', handleMouseMove)

    return () => window?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const context = backgroundCanvasRef?.current?.getContext('2d')

    if (!src) return
    if (!context) return

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src

    let animationFrameId: number

    function draw() {
      context?.clearRect(0, 0, width, height)

      const middleX = width / 2
      const middleY = height / 2
      const { mX, mY } = mousePositionRef.current
      const dx = mX - middleX
      const dy = mY - middleY

      const maxTilt = 0.075

      // 점대칭 Skew
      const skewX = Math.tan((dy / height) * maxTilt)
      const skewY = Math.tan((dx / height) * maxTilt)

      // background-cover
      const scaleWidth = width / img.naturalWidth
      const scaleHeight = height / img.naturalHeight
      const scale = Math.max(scaleWidth, scaleHeight)
      const drawWidth = img.naturalWidth * scale * 1.1
      const drawHeight = img.naturalHeight * scale * 1.1

      context?.save()

      context?.translate(middleX, middleY)
      context?.transform(1, skewY, skewX, 1, 0, 0)

      // 캔버스 중앙에 이미지 중심이 놓이도록
      context?.drawImage(
        img,
        -drawWidth / 2,
        -drawHeight / 2,
        drawWidth,
        drawHeight
      )

      context?.restore()

      animationFrameId = requestAnimationFrame(draw)
    }

    if (img.complete) draw()
    img.onload = () => draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [src, width, height])

  return (
    <canvas
      ref={backgroundCanvasRef}
      width={width}
      height={height}
      {...props}
    />
  )
}
