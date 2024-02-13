import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { PostList } from '../../_lib/components/compounds/postlist/post-list';
import { PageDataRow } from '@/_lib/types/notion-response';

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

const mockData: PageDataRow = {
  object: 'page',
  id: '123',
  created_time: '',
  last_edited_time: '',
  created_by: {},
  last_edited_by: {},
  cover: null,
  icon: null,
  parent: {},
  archived: false,
  properties: {
    date: {
      date: { start: null, end: null, time_zone: null },
    },
    title: {
      title: [
        {
          rich_text: {
            type: 'text',
            text: { content: 'abcd', link: null },
            plain_text: 'abcd',
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            href: null,
          },
          plain_text: 'abcd',
        },
      ],
    },
    summary: {
      rich_text: [],
    },
    published: true,
    thumbnail: {
      thumbnail: [],
    },
    tags: {
      multi_select: [],
    },
  },
  url: '',
  public_url: null,
};

export const Primary: Story = {
  render: () => <PostList pageData={mockData} />,
};
