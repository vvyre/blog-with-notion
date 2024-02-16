import { BlockTypes, NotionBlock } from '../block';

export type BlockComponentMap = Record<BlockTypes, ComponentType<NotionComponentProps>>;
