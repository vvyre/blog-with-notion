import { ComponentPropsWithRef, ElementType, forwardRef, ReactNode, Ref } from 'react';
import { BASE } from './view.css';

type ViewProps<T extends ElementType> = {
  as?: T;
  styleVariant?: string;
  children: ReactNode;
} & ComponentPropsWithRef<T>;

function V<T extends ElementType>({ as, styleVariant, children, ...props }: ViewProps<T>, ref: Ref<HTMLElement>) {
  const Component = as || 'div';
  const className = styleVariant || BASE;
  return (
    <Component className={props.className || className} ref={ref} {...props}>
      {children}
    </Component>
  );
}

export const View = forwardRef(V);
