import {
  Meta,
  StoryObj
} from '@storybook/react';
import {
  cart,
  edit,
  heart,
  leftArrow,
  rightArrow,
  trashCan
} from '../../assets/Images';

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
    customClass: 'pt-17px pb-17px pl-204px pr-204px',
  },
};

// Button sign up
export const ButtonSignUp: Story = {
  args: {
    type: 'default',
    label: 'Sign up',
    customClass: 'pt-17px pb-17px pl-204px pr-204px',
  },
};

// Button login on product page
export const ButtonLoginOnProductPage: Story = {
  args: {
    type: 'default',
    label: 'Login',
    customClass: 'pt-4 pb-4 pl-7 pr-7',
  },
};

// Button checkout
export const ButtonCheckout: Story = {
  args: {
    type: 'default',
    label: 'Checkout',
    customClass: 'pt-4 pb-4 pl-100px pr-100px',
  },
};

// Button add to cart
export const ButtonAddToCart: Story = {
  args: {
    type: 'default',
    label: 'Add to Cart',
    customClass: 'pt-4 pb-4 pl-110px pr-110px',
  },
};

// Button deliver here
export const ButtonDeliverHere: Story = {
  args: {
    type: 'default',
    label: 'Deliver Here',
    customClass: 'pt-4 pb-4 pl-100px pr-100px',
  },
};

// Button apply
export const ButtonApply: Story = {
  args: {
    type: 'default',
    label: 'Apply',
    customClass: 'pt-4 pb-4 pl-7 pr-7 rounded-r-10px rounded-l-none',
  },
};

// Button add new address
export const ButtonAddNewAddress: Story = {
  args: {
    type: 'default',
    label: 'Add New Address',
    customClass: 'pt-4 pb-4 pl-110px pr-110px',
  },
};

// Button add card
export const ButtonAddCard: Story = {
  args: {
    type: 'default',
    label: 'Add Card',
    customClass: 'pt-4 pb-4 pl-110px pr-110px',
  },
};

// Button continue
export const ButtonContinue: Story = {
  args: {
    type: 'default',
    label: 'Continue',
    customClass: 'pt-4 pb-4 pl-110px pr-110px',
  },
};

// Button shop now
export const ButtonShopNow: Story = {
  args: {
    type: 'default',
    rightIcon: rightArrow,
    label: 'Shop Now',
    customClass: 'pt-4 pb-4 pl-5 pr-5 flex',
    iconClasses: 'w-6 ml-5',
  },
};

// Button view all product
export const ButtonViewAllProduct: Story = {
  args: {
    type: 'default',
    rightIcon: rightArrow,
    label: 'View All Product',
    customClass: 'pt-4 pb-4 pl-5 pr-5 flex',
    iconClasses: 'w-6 ml-5',
  },
};

// Button forward
export const ButtonForward: Story = {
  args: {
    type: 'default',
    icon: rightArrow,
    customClass: 'p-4',
    iconClasses: 'w-6',
  },
};

// Button backward
export const ButtonBackward: Story = {
  args: {
    type: 'default',
    icon: leftArrow,
    customClass: 'p-4 bg-neutral-200',
    iconClasses: 'w-6',
  },
};

// Button add to cart in card
export const ButtonAddToCartInCard: Story = {
  args: {
    type: 'primary',
    label: 'Add to Cart',
    customClass: 'pt-4 pb-4 pl-20 pr-20',
  },
};

// Button western wear
export const ButtonWesternWear: Story = {
  args: {
    type: 'primary',
    label: 'Western Wear',
    customClass: 'pt-4 pb-4 pl-16 pr-16',
  },
};

// Button view cart
export const ButtonViewCart: Story = {
  args: {
    type: 'primary',
    label: 'View Cart',
    customClass: 'pt-4 pb-4 pl-110px pr-110px border-2 border-black !border-solid',
  },
};

// Button edit
export const ButtonEdit: Story = {
  args: {
    type: 'primary',
    leftIcon: edit,
    iconClasses: 'w-6 mr-2',
    label: 'Edit',
    customClass: 'bg-neutral-200 pt-2.5 pb-2.5 pl-12 pr-12 flex items-center',
  },
};

// Button delete
export const ButtonDelete: Story = {
  args: {
    type: 'primary',
    leftIcon: trashCan,
    iconClasses: 'w-6 mr-2',
    label: 'Delete',
    customClass: 'bg-red-100 text-red-400 pt-2.5 pb-2.5 pl-12 pr-12 flex items-center',
  },
};

// Button icon delete
export const ButtonIconDelete: Story = {
  args: {
    type: 'secondary',
    icon: trashCan,
    iconClasses: 'w-6',
  },
};

// Button icon heart
export const ButtonIconHeart: Story = {
  args: {
    type: 'secondary',
    icon: heart,
    iconClasses: 'w-6',
  },
};

// Button icon cart
export const ButtonIconCart: Story = {
  args: {
    type: 'secondary',
    icon: cart,
    iconClasses: 'w-6',
  },
};
