export interface ChildPage extends NotionPolymorphicComponentProps<'child_page'> {
  block: {
    type: 'child_page';
    child_page: {
      title: string;
    };
  };
}
