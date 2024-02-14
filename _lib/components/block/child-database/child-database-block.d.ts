export interface ChildDatabase extends NotionPolymorphicComponentProps<'child_database'> {
  block: {
    type: 'child_database';
    child_database: {
      title: string;
    };
  };
}
