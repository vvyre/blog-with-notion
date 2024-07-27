import { NotionComponentPropsWithChildren } from '@/_lib/types/component-common';
import { ChildrenBlocks } from '../children-blocks';
import { BASE, SUMMARY } from './toggle.css';
import { Txt } from '../../typography/txt/txt';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export function Toggle({ block }: NotionComponentPropsWithChildren<'toggle'>) {
  return (
    <details className={BASE}>
      <summary className={SUMMARY}>
        {block.toggle.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <Txt key={idx} as="span" richText={txt} />
        ))}
      </summary>
      {block.toggle.children && <ChildrenBlocks key={block.id} childrenBlocks={block.toggle.children} />}
    </details>
  );
}
