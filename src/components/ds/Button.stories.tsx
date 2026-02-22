import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    href: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'See how I work',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'View all work',
  },
};

export const AsLink: Story = {
  args: {
    variant: 'primary',
    href: '/work',
    children: 'See how I work',
  },
};

// To embed a Figma design in this story, add:
// parameters: {
//   design: { type: 'figma', url: 'https://www.figma.com/file/...' },
// },
