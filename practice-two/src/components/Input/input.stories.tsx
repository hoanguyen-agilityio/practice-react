import {
  Meta,
  StoryObj
} from '@storybook/react';

// Components
import Input from './index';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

type Story = StoryObj<typeof Input>;

// Default input
export const DefaultInput: Story = {
  args: {
    type: 'text',
    name: 'input',
    ariaLabel: 'Default input',
    customClass: 'w-445px',
  },
};

// Password input
export const PasswordInput: Story = {
  args: {
    type: 'password',
    name: 'password',
    ariaLabel: 'Password input',
    placeholder: '••••••••••••••••••••',
    customClass: 'w-445px',
  },
};

// Error input
export const ErrorInput: Story = {
  args: {
    type: 'text',
    name: 'Error input',
    ariaLabel: 'Error input',
    customClass: 'w-445px',
    errorMessage: 'Error message',
  },
};
