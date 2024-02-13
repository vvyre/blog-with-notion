import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Txt } from './Txt';

const meta: Meta<typeof Txt> = {
  component: Txt,
};

export default meta;
type Story = StoryObj<typeof Txt>;

export const Primary: Story = {
  render: () => (
    <Txt as="p">
      텍스트 컴포넌트입니다. 기본적으로 Notion의 Rich Text 객체를 받아 그대로 사용하며, Annotation의 사양을 그대로
      따릅니다. richText가 없다면 노션 블록 컴포넌트가 아닌 상황으로, 이때에는 props로 옵션을 전달해 사용할 수 있습니다.
      상황에 따라 p, span 등 여러 마크업으로 사용할 수 있습니다.
    </Txt>
  ),
};
