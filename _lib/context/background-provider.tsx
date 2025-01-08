'use client';
import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { HIDE } from '../components/layout/navigation/navigation.css';
import { useBackground } from '../react/use-background';
import { useCategory } from '../react/use-category';
import { useRandomBackground } from '@/utils/get-random-background';
import { NavigationContext } from './navigation-provider';
import { useIsomorphicLayoutEffect } from '@syyu/util/react';

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
  const { path } = useContext(NavigationContext);
  const isStudy = path.startsWith('/study');
  const imgSrc = useBackground(26);
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
    const IMG = new Image();
    IMG.crossOrigin = 'anonymous';
    IMG.src = imgSrc;

    // ref나 포탈로 정확한 width 측정하는 것으로 해야 하지만 임시로
    // DOM값을 좌측 위 프로필 버튼을 수동으로 계산하여 측정함
    const marginTop = 1 * 16; // appr. 1rem
    const marginLeft = 2 * 16; // appr. 2rem
    const width = 10 * 16; // appr. 10rem
    const height = 2 * 16; // 2rem

    IMG.onload = () => {
      canvasCtx?.drawImage(IMG, 0, 0);
      const imageData = canvasCtx?.getImageData(marginLeft, marginTop, width, height);
      const data = imageData?.data ?? [];

      // 명도 계산, 0.2126R + 0.7152G + 0.0722B
      // 내비게이션 위치 부분(그림의 상단부)만 측정

      const totalPixels = width * height;
      let sumBrightness = 0;

      // 1px당 RGBA 채널이어서 4씩 증가함
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
    };
  }, [imgSrc, path]);
  console.log(brightness);
  return (
    <BackgroundContext.Provider value={{ src: imgSrc, brightness, DARK_TEXT_PREFERED, backgroundColor }}>
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
