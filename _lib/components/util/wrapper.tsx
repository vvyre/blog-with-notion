import type { ElementType, ReactNode } from 'react';

export function Wrapper({
  condition = true,
  wrapper,
  children,
}: {
  condition?: boolean;
  wrapper: ElementType | React.ComponentType;
  children: ReactNode;
}) {
  const Component = wrapper;
  return condition ? <Component>{children}</Component> : <>{children}</>;
}
