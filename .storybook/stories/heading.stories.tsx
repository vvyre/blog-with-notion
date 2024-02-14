import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../../_lib/components/typography/heading/heading';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    componentSubtitle:
      '제목을 나타낼 때 사용하는 컴포넌트입니다. 기본적으로 Notion의 Rich Text 객체를 받아 그대로 사용하며, Annotation의 사양을 그대로 따릅니다. richText가 없다면 노션 블록 컴포넌트가 아닌 상황으로, 이때에는 props로 옵션을 전달해 사용할 수 있습니다. 상황에 따라 h1, h2, h3 등 여러 마크업으로 사용할 수 있습니다.',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      description: '어떤 마크업으로 사용할지 정합니다. Heading인 만큼 Hn 마크업을 권장합니다.',
    },
    bold: {
      description: 'boolean으로 true를 주거나 bold를 입력하면 웨이트가 굵게 표시됩니다.',
      control: 'boolean',
    },
    italic: {
      description:
        'boolean으로 true를 주거나 italic을 입력하면 이탤릭체로 변합니다. (코드 서체 이외에 본문 서체는 이탤릭을 지원하지 않습니다)',
      control: 'boolean',
    },
    strike: {
      description: 'boolean으로 true를 주거나 strike을 입력하면 취소선이 표시됩니다.',
      control: 'boolean',
    },
    underline: {
      description: 'boolean으로 true를 주거나 underline을 입력하면 밑줄이 표시됩니다.',
      control: 'boolean',
    },
    size: {
      description: '미리 지정된 스타일을 정할 수 있습니다. 사이즈에 따라 폰트 웨이트가 자동으로 설정되어 있습니다.',
      control: 'boolean',
    },
    color: {
      description: '색상을 정할 수 있습니다. 기본값은 default입니다.',
      control: 'boolean',
    },
    code: {
      description: 'boolean으로 true를 주거나 code를 입력하면 인라인 코드로 간주하여 스타일링됩니다.',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
  render: () => <Heading as="h1">제목을 표현할 때 쓰는 헤딩 컴포넌트입니다.</Heading>,
};
export const Secondary: Story = {
  render: () => <Heading as="h2">제목을 표현할 때 쓰는 헤딩 컴포넌트입니다.</Heading>,
};
