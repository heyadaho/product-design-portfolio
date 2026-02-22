import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    title: { control: 'text' },
    tagline: { control: 'text' },
    year: { control: 'text' },
    image: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    href: '/work/example',
    title: 'Design System & Component Library',
    tagline: 'Establishing consistent patterns across products',
    year: '2024',
    image: '/images/work/placeholder.svg',
  },
};

export const NoYear: Story = {
  args: {
    href: '/work/example',
    title: 'Sample App',
    tagline: 'End-to-end product design and delivery',
  },
};
