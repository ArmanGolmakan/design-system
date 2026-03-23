import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    isDisabled: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
  },
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    helperText: "We'll never share your email with anyone.",
    isDisabled: false,
    isRequired: false,
    isInvalid: false,
    isReadOnly: false,
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'johndoe',
    helperText: 'Must be 3–20 characters. Letters and numbers only.',
  },
};

export const Required: Story = {
  args: {
    label: 'Full name',
    placeholder: 'Jane Smith',
    isRequired: true,
    helperText: 'This field is required.',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    isInvalid: true,
    errorMessage: 'Enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email address',
    value: 'locked@example.com',
    isDisabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Username',
    value: 'johndoe',
    isReadOnly: true,
    helperText: 'This field cannot be edited.',
  },
};

export const NoLabel: Story = {
  args: {
    label: undefined,
    placeholder: 'Search…',
    helperText: undefined,
    'aria-label': 'Search',
  },
};
