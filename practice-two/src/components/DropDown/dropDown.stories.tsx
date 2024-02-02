import {
  Meta,
  StoryObj
} from '@storybook/react';

// Components
import Dropdown from './index';
import {
  DATA_PRODUCT_CATEGORIES,
  DATA_FILTER_BY_COLOR,
  DATA_FILTER_BY_SIZE
} from '../../constants/data';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

type Story = StoryObj<typeof Dropdown>;

// Drop down open
export const DropdownOpen: Story = {
  args: {
    option: DATA_PRODUCT_CATEGORIES,
    buttonTitle: 'Product Categories',
  },
};

// Drop down close
export const DropdownClose: Story = {
  args: {
    option: DATA_PRODUCT_CATEGORIES,
    buttonTitle: 'Product Categories',
  },
};

// Filter by color close
export const FilterByColorClose: Story = {
  args: {
    option: DATA_FILTER_BY_COLOR,
    buttonTitle: 'Filter by Color',
  },
};

// Filter by color open
export const FilterByColorOpen: Story = {
  args: {
    option: DATA_FILTER_BY_COLOR,
    buttonTitle: 'Filter by Color',
  },
};

// Filter by size close
export const FilterBySizeClose: Story = {
  args: {
    option: DATA_FILTER_BY_SIZE,
    buttonTitle: 'Filter by Size',
  },
};

// Filter by size open
export const FilterBySizeOpen: Story = {
  args: {
    option: DATA_FILTER_BY_SIZE,
    buttonTitle: 'Filter by Size',
  },
};
