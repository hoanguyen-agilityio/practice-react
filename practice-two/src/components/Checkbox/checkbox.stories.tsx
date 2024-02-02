import {
  Meta,
  StoryObj
} from '@storybook/react';

// Components
import Checkbox from './index';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

type Story = StoryObj<typeof Checkbox>;

// Checkbox default
export const CheckboxDefault: Story = {
  args: {
    variants: 'default',
    label: 'Men',
    checked: false,
  },
};

// Checkbox checked default
export const CheckboxChecked: Story = {
  args: {
    variants: 'default',
    label: 'Women',
    checked: true,
  },
};

// Checkbox primary
export const CheckboxPrimary: Story = {
  args: {
    variants: 'primary',
    label: 'Red',
    checked: false,
    customClass: 'bg-red-600 accent-red-600',
  },
};

// Checkbox primary checked
export const CheckboxPrimaryChecked: Story = {
  args: {
    variants: 'primary',
    label: 'Red',
    checked: true,
    customClass: 'bg-red-600 accent-red-600',
  },
};
