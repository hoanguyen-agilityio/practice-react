import {
  Meta,
  StoryObj
} from '@storybook/react';

// Components
import Sidebar from './index';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as Meta;

type Story = StoryObj<typeof Sidebar>;

// Sidebar
export const SidebarDefault: Story = {
  args: {},
};
