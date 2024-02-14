export interface CodeBlock extends NotionPolymorphicComponentProps<'code'> {
  block: InternalFile & ExternalFile;
}

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
