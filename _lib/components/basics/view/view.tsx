import { ComponentPropsWithRef, ElementType, forwardRef, ReactNode, Ref } from 'react';
import { BASE } from './view.css';

type ViewProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithRef<T>;

function V<T extends ElementType>({ as, children, ...props }: ViewProps<T>, ref: Ref<HTMLElement>) {
  const Component = as ?? 'div';
  const cn = props.className ?? BASE;
  return (
    <Component className={cn} ref={ref} {...props}>
      {children}
    </Component>
  );
}

export const View = forwardRef(V);
