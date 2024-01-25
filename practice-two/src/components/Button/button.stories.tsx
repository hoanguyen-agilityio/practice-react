import {
  Meta,
  StoryObj
} from '@storybook/react';

// Components
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;

export const ButtonLogin: Story = {
  args: {
    type: 'default',
    label: 'Login',
    custom: 'pt-17px pb-17px pl-204px pr-204px',
  },
};

export const ButtonSignUp: Story = {
  args: {
    type: 'default',
    label: 'Sign up',
    custom: 'pt-17px pb-17px pl-204px pr-204px',
  },
};

export const ButtonLoginOnProductPage: Story = {
  args: {
    type: 'default',
    label: 'Login',
    custom: 'pt-4 pb-4 pl-7 pr-7',
  },
};

export const ButtonCheckOut: Story = {
  args: {
    type: 'default',
    label: 'Checkout',
    custom: 'pt-4 pb-4 pl-100px pr-100px',
  },
};
