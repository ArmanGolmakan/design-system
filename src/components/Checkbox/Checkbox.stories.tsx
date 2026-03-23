import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    isSelected: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
  args: {
    children: 'Accept terms and conditions',
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultSelected: true,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    isDisabled: true,
    defaultSelected: true,
  },
};

export const NoLabel: Story = {
  args: {
    children: undefined,
    'aria-label': 'Toggle',
  },
};

export const Group: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Checkbox {...args} defaultSelected>Notifications via email</Checkbox>
      <Checkbox {...args}>Notifications via SMS</Checkbox>
      <Checkbox {...args} defaultSelected>Notifications via push</Checkbox>
    </div>
  ),
  args: {
    children: undefined,
  },
};
