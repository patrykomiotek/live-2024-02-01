import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'UI/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Name',
  },
};

export const WithEmailLabel: Story = {
  args: {
    label: 'E-mail',
    type: 'email',
  },
};

export const WithHint: Story = {
  args: {
    label: 'E-mail',
    type: 'email',
    hint: 'Provide e-mail address',
  },
};

export const WithDisabled: Story = {
  args: {
    label: 'E-mail',
    type: 'email',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'E-mail',
    type: 'email',
    error: 'Not a valid email address.',
  },
};
