import {
  Meta,
  StoryObj
} from '@storybook/react';
import { edit, rightArrow } from '../../assets/Images';

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

// Button deliver here
export const ButtonDeliverHere: Story = {
  args: {
    type: 'default',
    label: 'Deliver Here',
    custom: 'pt-4 pb-4 pl-100px pr-100px',
  },
};

// Button apply
export const ButtonApply: Story = {
  args: {
    type: 'default',
    label: 'Apply',
    custom: 'pt-4 pb-4 pl-7 pr-7 rounded-r-10px rounded-l-none',
  },
};

// Button add new address
export const ButtonAddNewAddress: Story = {
  args: {
    type: 'default',
    label: 'Add New Address',
    custom: 'pt-4 pb-4 pl-110px pr-110px',
  },
};

// Button add card
export const ButtonAddCard: Story = {
  args: {
    type: 'default',
    label: 'Add Card',
    custom: 'pt-4 pb-4 pl-110px pr-110px',
  },
};

// Button continue
export const ButtonContinue: Story = {
  args: {
    type: 'default',
    label: 'Continue',
    custom: 'pt-4 pb-4 pl-110px pr-110px',
  },
};

// Button shop now
export const ButtonShopNow: Story = {
  args: {
    type: 'default',
    rightIcon: rightArrow,
    label: 'Shop Now',
    custom: 'pt-4 pb-4 pl-5 pr-5 flex',
    iconClasses:'w-6 ml-5'
  },
};

// Button view all product
export const ButtonViewAllProduct: Story = {
  args: {
    type: 'default',
    rightIcon: rightArrow,
    label: 'View All Product',
    custom: 'pt-4 pb-4 pl-5 pr-5 flex',
    iconClasses:'w-6 ml-5'
  },
};

// Button forward
export const ButtonForward: Story = {
  args: {
    type: 'default',
    icon: rightArrow,
    custom: 'p-4',
    iconClasses:'w-6'
  },
};

// Button add to cart in card
export const ButtonAddToCartInCard: Story = {
  args: {
    type: 'primary',
    label: 'Add to Cart',
    custom: 'pt-4 pb-4 pl-20 pr-20',
  },
};

// Button western wear
export const ButtonWesternWear: Story = {
  args: {
    type: 'primary',
    label: 'Western Wear',
    custom: 'pt-4 pb-4 pl-16 pr-16',
  },
};

// Button view cart
export const ButtonViewCart: Story = {
  args: {
    type: 'primary',
    label: 'View Cart',
    custom: 'pt-4 pb-4 pl-110px pr-110px border-2 border-black !border-solid',
  },
};

// Button edit
export const ButtonEdit: Story = {
  args: {
    type: 'primary',
    leftIcon: edit,
    iconClasses:'w-8 mr-2',
    label: 'Edit',
    custom: 'bg-neutral-200 pt-1.5 pb-1.5 pl-12 pr-12 flex items-center',
  },
};
