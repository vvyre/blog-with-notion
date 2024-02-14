import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Btn } from '../../_lib/components/interaction/button/btn';

const meta: Meta<typeof Btn> = {
  title: 'Interaction/Btn',
  component: Btn,
  parameters: {
    layout: 'centered',
    componentSubtitle: '제목 이외의 문자열을 표현할 때 사용합니다.',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      description: '어떤 마크업으로 사용할지 정합니다. a, button, input 외에도 Link 컴포넌트로 사용할 수 있습니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Btn>;

export const Primary: Story = {
  render: () => <Btn>버튼</Btn>,
};
