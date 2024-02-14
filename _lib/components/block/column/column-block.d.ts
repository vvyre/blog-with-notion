export interface Column extends NotionPolymorphicComponentProps<'column'> {
  block: {
    type: 'column';
    column: {};
  };
}
