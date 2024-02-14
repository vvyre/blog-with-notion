export interface Bookmark extends NotionPolymorphicComponentProps<'bookmark'> {
  block: {
    type: 'bookmark';
    bookmark: {
      caption: RichText[];
      url: 'string';
    };
  };
}
