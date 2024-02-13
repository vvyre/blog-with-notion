import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../../_lib/components/typography/tag/tag';

const meta: Meta<typeof Tag> = {
  title: 'Layout/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    componentSubtitle: '태그를 나타낼 때 쓰입니다. 블로그 글의 주제나 키워드를 표현할 때 사용합니다.',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '내부에 들어갈 컴포넌트입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  render: () => (
    <>
      <Tag>으악</Tag>
      <Tag>으악</Tag>
      <Tag>으악</Tag>
    </>
  ),
};
