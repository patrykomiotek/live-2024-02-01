import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';

const meta = {
  title: 'UI/Molecules/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _WarningWithDescription: Story = {
  args: {
    title: 'Attention needed',
    type: 'warning',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
  },
};

export const _WarningWithoutBorder: Story = {
  args: {
    title: 'Attention needed',
    type: 'warning',
    showLeftBorder: false,
  },
};

export const _SuccessWithoutDescription: Story = {
  args: {
    title: 'Successfully uploaded',
    type: 'success',
  },
};

export const _ErrorWithDescription: Story = {
  args: {
    title: 'There were errors with your submission',
    type: 'error',
    description: 'Your password must be at least 8 characters',
  },
};

export const _InfoWithoutDescription: Story = {
  args: {
    title: 'There were errors with your submission',
    titleBold: false,
    type: 'info',
  },
};

export const _InfoBoldWithoutDescription: Story = {
  args: {
    title: 'There were errors with your submission',
    titleBold: true,
    type: 'info',
  },
};
