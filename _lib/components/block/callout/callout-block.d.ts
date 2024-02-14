export interface Callout extends NotionPolymorphicComponentProps<'callout'> {
  block: {
    type: 'callout';
    callout: {
      rich_text: RichText[];
      color: 'default';
    };
  };
}
