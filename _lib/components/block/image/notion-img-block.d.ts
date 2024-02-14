import { RichText } from '@/_lib/types/block';
import { ExternalFile } from '../file/file-block';

export interface NotionImg extends NotionPolymorphicComponentProps<'image'> {
  block: {
    type: 'image';
    image: {
      caption: RichText[];
      type: 'file';
      file: {
        url: string;
        expiry_time: string;
      };
    };
  };
}
