import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { PostList } from '../../_lib/components/compounds/postlist/post-list';
import { postListMock } from '../mock-data/post-list';

const meta: Meta<typeof PostList> = {
  title: 'Compound/PostList',
  component: PostList,
  parameters: {
    layout: 'centered',
    componentSubtitle: '제목을 표현할 때 사용합니다.',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PostList>;

export const Primary: Story = {
  render: () => <PostList pageData={postListMock} />,
};
