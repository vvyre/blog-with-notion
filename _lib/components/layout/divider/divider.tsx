import { BASE } from './divider.css';

export function Divider({ styleVariant }: { styleVariant?: string }) {
  return <hr className={styleVariant || BASE} />;
}
