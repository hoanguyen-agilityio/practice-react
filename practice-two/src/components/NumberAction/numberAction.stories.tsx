import { Meta, StoryObj } from '@storybook/react';

// Components
import NumberAction from './index';

export default {
  title: 'Components/NumberAction',
  component: NumberAction,
} as Meta;

type Story = StoryObj<typeof NumberAction>;

// Number action default
export const NumberActionDefault: Story = {
  args: {
    index: 1,
  },
};

// Disable the decrement button when the quantity reaches 0
export const DisableReduceButton: Story = {
  args: {
    index: 0,
  },
};
