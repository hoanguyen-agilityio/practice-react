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

// Button login
export const ButtonLogin: Story = {
  args: {
    type: 'default',
    label: 'Login',
    custom: 'pt-17px pb-17px pl-204px pr-204px',
  },
};

// Button sign up
export const ButtonSignUp: Story = {
  args: {
    type: 'default',
    label: 'Sign up',
    custom: 'pt-17px pb-17px pl-204px pr-204px',
  },
};

// Button login on product page
export const ButtonLoginOnProductPage: Story = {
  args: {
    type: 'default',
    label: 'Login',
    custom: 'pt-4 pb-4 pl-7 pr-7',
  },
};

// Button checkout
export const ButtonCheckout: Story = {
  args: {
    type: 'default',
    label: 'Checkout',
    custom: 'pt-4 pb-4 pl-100px pr-100px',
  },
};

// Button add to cart
export const ButtonAddToCart: Story = {
  args: {
    type: 'default',
    label: 'Add to Cart',
    custom: 'pt-4 pb-4 pl-110px pr-110px',
  },
};

export const ButtonDeliverHere: Story = {
  args: {
    type: 'default',
    label: 'Deliver Here',
    custom: 'pt-4 pb-4 pl-100px pr-100px',
  },
};