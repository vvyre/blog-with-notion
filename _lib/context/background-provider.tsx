'use client';
import type { ReactNode } from 'react';
import { createContext, useEffect, useRef, useState } from 'react';
import { HIDE } from '../components/layout/navigation/navigation.css';
import { useBackground } from '../react/use-background';
import { useIsomorphicLayoutEffect } from '@syyu/util/react';
import { useCategory } from '../react/use-category';
import { useRandomBackground } from '@/utils/get-random-background';

interface BackgroundContextType {
  src: string;
  brightness: number;
  DARK_TEXT_PREFERED: boolean;
  backgroundColor: unknown;
}

export const BackgroundContext = createContext<BackgroundContextType>({
  src: '',
  brightness: 0,
  DARK_TEXT_PREFERED: false,
  backgroundColor: () => {},
});

export const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isStudy, path } = useCategory();
  const url = useBackground(26);
  const { backgroundColor } = useRandomBackground();

  const [brightness, setBrightness] = useState<number>(0);
  const DARK_TEXT_PREFERED = brightness > 186;

  useEffect(() => {
    if (!isStudy) return;
    if (!backgroundColor) return;
    const r = parseInt(backgroundColor.slice(1, 3), 10);
    const g = parseInt(backgroundColor.slice(2, 5), 10);
    const b = parseInt(backgroundColor.slice(4), 10);
    setBrightness(0.2126 * r + 0.7152 * g + 0.0722 * b);
  }, [path, backgroundColor]);

  useIsomorphicLayoutEffect(() => {
    if (isStudy) return;
    if (!canvasRef) return;

    const canvasCtx = canvasRef.current?.getContext('2d');
    const IMG = document.createElement('img');
    IMG.crossOrigin = 'anonymous';
    IMG.src = url;
    canvasCtx?.drawImage(IMG, 0, 0);
    const imageData = canvasCtx?.getImageData(0, 0, 500, 400);
    const data = imageData?.data ?? [];

    // 명도 계산, 0.2126R + 0.7152G + 0.0722B
    // 내비게이션 위치 부분의 텍스트 영역(그림의 상단부)만 측정
    const totalPixels = 50 * 40;
    let sumBrightness = 0;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      sumBrightness += brightness;
    }

    // 평균 명도
    const averageBrightness = sumBrightness / totalPixels;
    setBrightness(averageBrightness);
  }, [url, path]);

  return (
    <BackgroundContext.Provider value={{ src: url, brightness, DARK_TEXT_PREFERED, backgroundColor }}>
      <canvas
        id="background_image"
        className={HIDE}
        style={{
          width: '500px',
          height: '400px',
        }}
        ref={canvasRef}
      />
      {children}
    </BackgroundContext.Provider>
  );
};
