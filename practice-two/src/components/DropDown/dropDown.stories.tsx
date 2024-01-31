import {
  Meta,
  StoryObj
} from '@storybook/react';

// Components
import DropDown from './index';
import {
  DATA_PRODUCT_CATEGORIES,
  DATA_FILTER_BY_COLOR,
  DATA_FILTER_BY_SIZE
} from '../../constants/data';

export default {
  title: 'Components/DropDown',
  component: DropDown,
} as Meta;

type Story = StoryObj<typeof DropDown>;

// Drop down open
export const DropDownOpen: Story = {
  args: {
    option: DATA_PRODUCT_CATEGORIES,
    labelButton: 'Product Categories',
    isOpen: true,
  },
};

// Drop down close
export const DropDownClose: Story = {
  args: {
    option: DATA_PRODUCT_CATEGORIES,
    labelButton: 'Product Categories',
    isOpen: false,
  },
};

// Filter by color close
export const FilterByColorClose: Story = {
  args: {
    option: DATA_FILTER_BY_COLOR,
    labelButton: 'Filter by Color',
    isOpen: false,
  },
};

// Filter by color open
export const FilterByColorOpen: Story = {
  args: {
    option: DATA_FILTER_BY_COLOR,
    labelButton: 'Filter by Color',
    isOpen: true,
  },
};

// Filter by size close
export const FilterBySizeClose: Story = {
  args: {
    option: DATA_FILTER_BY_SIZE,
    labelButton: 'Filter by Size',
    isOpen: false,
  },
};

// Filter by size open
export const FilterBySizeOpen: Story = {
  args: {
    option: DATA_FILTER_BY_SIZE,
    labelButton: 'Filter by Size',
    isOpen: true,
  },
};
