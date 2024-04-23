import { NotionComponentPropsWithChildren } from '@/_lib/types/component-common';
import { ChildrenBlocks } from '../children-blocks';
import { BASE, SUMMARY } from './toggle.css';
import { Txt } from '../../typography/txt/txt';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { useId } from 'react';

export function Toggle({ block }: NotionComponentPropsWithChildren<'toggle'>) {
  const id = useId();
  return (
    <details className={BASE}>
      <summary className={SUMMARY}>
        {block.toggle.rich_text.map((txt: RichTextItemResponse) => (
          <Txt key={id} as="span" richText={txt} />
        ))}
      </summary>
      {block.toggle.children && <ChildrenBlocks block={block} />}
    </details>
  );
}
