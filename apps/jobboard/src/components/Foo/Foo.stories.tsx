import type { Meta, StoryObj } from '@storybook/react';

import { Foo } from './Foo';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Foo',
  component: Foo,
  tags: ['autodocs'],
} satisfies Meta<typeof Foo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
