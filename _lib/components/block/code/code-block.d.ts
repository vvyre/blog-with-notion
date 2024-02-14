export interface CodeBlock extends NotionPolymorphicComponentProps<'code'> {
  block: {
    type: 'code';
    code: {
      caption: RichText[];
      rich_text: RichText[];
      language: string;
    };
  };
}
