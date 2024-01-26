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
    ariaLabel: 'Input default',
    customClass: 'w-445px'
  },
};

// Password input
export const PasswordInput: Story = {
  args: {
    type: 'password',
    name: 'password',
    ariaLabel: 'Input password',
    placeholder: '••••••••••••••••••••',
    customClass: 'w-445px'
  },
};
