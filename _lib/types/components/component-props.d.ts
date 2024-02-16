import { COLORS } from '@/_lib/styles/colors.css';
import { NotionBlock, RichText, TextProperty } from '../block';

export type BlockResponse = NotionComponents['block'];
export type NotionComponents =
  | NotionImageResponse
  | TextResponse
  | ParagraphResponse
  | NumberedListItemResponse
  | NumberedListWrapperResponse
  | BulletedListItemResponse
  | BulletedListWrapperResponse
  | MentionResponse
  | ColumnResponse
  | ColumnListResponse
  | CalloutResponse
  | CodeBlockResponse
  | ChildDatabaseResponse
  | ChildPageResponse
  | BookmarkResponse
  | BreadCrumbResponse
  | QuoteResponse
  | TableResponse
  | Heading_1Response
  | Heading_2Response
  | Heading_3Response
  | FileBlockResponse
  | SyncedBlockResponse;

interface Image_File {
  caption: RichText[];
  type: 'file' | 'external';
  file?: {
    url: string;
    expiry_time: string;
  };
}
interface Image_External {
  caption: RichText[];
  type: 'file' | 'external';
  external?: {
    url: string;
    expiry_time: string;
  };
}
export interface NotionImageResponse {
  block: {
    type: 'image';
    image: Image_File & Image_External;
    blurDataURL?: string;
  } & NotionBlock;
}

export interface TextResponse {
  block: {
    type: 'text';
    text: TextProperty;
    annotations: Annotations;
    plain_text: string;
    href: string | null;
  } & NotionBlock;
}

export interface ParagraphResponse {
  block: {
    type: 'paragraph';
    paragraph: {
      rich_text: RichText[];
      color: keyof typeof COLORS;
      children: Partial<NotionBlock[]>;
    } & NotionBlock;
  };
}

export interface NumberedListItemResponse {
  block: {
    type: 'numbered_list_item';
    numbered_list_item: {
      rich_text: RichText[];
      color: keyof typeof COLORS;
      children: Partial<NotionBlock[]>;
    };
  } & NotionBlock;
}

export interface NumberedListWrapperResponse {
  block: {
    type: 'numbered_list_items';
    id: string;
    numbered_list_items: NumberedListItem[];
  } & NotionBlock;
}

export interface MentionResponse {
  block: {
    type: 'mention';
    mention: NotionBlock;
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: keyof typeof COLORS;
    };
    plain_text: string;
    href: string;
  } & NotionBlock;
}

export interface ColumnListResponse {
  block: {
    type: 'column_list';
    column_list: {};
  } & NotionBlock;
}

export interface ColumnResponse {
  block: {
    type: 'column';
    column: {};
  } & NotionBlock;
}
export interface CodeBlockResponse {
  block: {
    type: 'code';
    code: {
      caption: RichText[];
      rich_text: RichText[];
      language: string;
    };
  } & NotionBlock;
}

export interface ChildPageResponse {
  block: {
    type: 'child_page';
    child_page: {
      title: string;
    };
  } & NotionBlock;
}

export interface ChildDatabaseResponse {
  block: {
    type: 'child_database';
    child_database: {
      title: string;
    };
  } & NotionBlock;
}
export interface CalloutResponse {
  block: {
    type: 'callout';
    callout: {
      rich_text: RichText[];
      color: 'default';
      icon: {
        emoji: string;
      };
    };
  } & NotionBlock;
}

export interface BulletedListItemResponse {
  block: {
    type: 'bulleted_list_item';
    bulleted_list_item: {
      rich_text: RichText[];
      color: keyof typeof COLORS;
      children: Partial<NotionBlock[]>;
    };
  } & NotionBlock;
}

export interface BulletedListWrapperResponse {
  block: {
    type: 'bulleted_list_items';
    bulleted_list_items: BulletedListItem[];
  } & NotionBlock;
}

export interface BreadCrumbResponse {
  block: {
    type: 'breadcrumb';
    breadcrumb: {};
  } & NotionBlock;
}

export interface BookmarkResponse {
  block: {
    type: 'bookmark';
    bookmark: {
      caption: RichText[];
      url: string;
    };
  } & NotionBlock;
}

export interface QuoteResponse {
  block: {
    type: 'quote';
    quote: {
      rich_text: RichText[];
      color: keyof typeof COLORS;
      children?: NotionBlock[];
    };
  } & NotionBlock;
}

export interface TableResponse {
  block: {
    type: 'table';
    table: {
      table_width: number;
      has_column_header: boolean;
      has_row_header: boolean;
    };
  } & NotionBlock;
}

export interface TableRowResponse {
  block: {
    type: 'table_row';
    table_row: {
      cells: NotionBlock[];
    };
  } & NotionBlock;
}

export interface TableOfContentsResponse {
  block: {
    type: 'table_of_contents';
    table_of_contents: {
      color: keyof typeof COLORS;
    };
  } & NotionBlock;
}

export interface NotionDividerResponse {
  block: {
    type: 'divider';
  } & NotionBlock;
}
export interface Heading_1Response {
  block: {
    type: 'heading_1';
    heading_1: {
      rich_text: RichText[];
      color: 'default';
    };
  } & NotionBlock;
}

export interface Heading_2Response {
  block: {
    type: 'heading_2';
    heading_2: {
      rich_text: RichText[];
      color: 'default';
    };
  } & NotionBlock;
}

export interface Heading_3Response {
  block: {
    type: 'heading_3';
    heading_3: {
      rich_text: RichText[];
      color: 'default';
    };
  } & NotionBlock;
}

export type FileBlockResponse = InternalFile & ExternalFile & NotionBlock;

export interface InternalFile {
  type: 'file';
  file: {
    url: string;
    expiry_time: string;
  };
}

export interface ExternalFile {
  type: 'external';
  external: {
    url: 'https://website.domain/images/image.png';
  };
}

/**
 * 블록 자체에 type이라는 key가 없어서 이 블록 처리하는 컴포넌트를 따로 구현해야 함.
 * duplicated_synced_block의 경우 api call을 통해 원본 페이지에서 따로 불러온 후 이 synced block에 합쳐야 함.
 * 이때 원본 페이지가 integration에 포함되어있지 않으면 권한 문제로 안 불러와질 수도 있음..
 */
export interface SyncedBlockResponse {
  block: {
    type: 'synced_block';
    synced_block: {
      synced_from: string | null;
      children: NotionBlock[];
      /**
     * {

        callout: {
          rich_text: [
            {
              type: 'text';
              text: {
                content: 'Callout in synced block';
              };
            }
          ];
        };
      }
     */
    };
  } & NotionBlock;
}

export interface WithChildren {
  children: NotionBlock[];
}
