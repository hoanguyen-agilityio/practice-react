import {
  Meta,
  StoryObj
} from '@storybook/react';

// Components
import Header from './index';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

type Story = StoryObj<typeof Header>;

// Header
export const HeaderDefault: Story = {
  args: {},
};
