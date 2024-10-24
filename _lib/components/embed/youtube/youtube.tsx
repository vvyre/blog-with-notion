import { BASE } from './youtube.css';

export function Youtube({ src }: { src: string }) {
  const IDX = src.lastIndexOf('/');
  const ID = src.slice(IDX + 1, -2);
  return (
    <>
      <iframe
        className={BASE}
        src={`https://www.youtube.com/embed/${ID}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </>
  );
}
