import { ReactNode } from 'react';

export function Overlay({ control, content }: { control: ReactNode; content: ReactNode }) {
  return (
    <>
      <div>{control}</div>
      <div>{content}</div>
    </>
  );
}
