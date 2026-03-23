import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const fruits = [
  { id: 'apple', label: 'Apple' },
  { id: 'banana', label: 'Banana' },
  { id: 'cherry', label: 'Cherry' },
  { id: 'durian', label: 'Durian', isDisabled: true },
  { id: 'elderberry', label: 'Elderberry' },
  { id: 'fig', label: 'Fig' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    isDisabled: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
  args: {
    label: 'Favourite fruit',
    placeholder: 'Select a fruit',
    items: fruits,
    helperText: 'Pick the one you enjoy most.',
    isDisabled: false,
    isRequired: false,
    isInvalid: false,
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select your country',
    helperText: 'Used to determine your timezone.',
    items: [
      { id: 'us', label: 'United States' },
      { id: 'uk', label: 'United Kingdom' },
      { id: 'ca', label: 'Canada' },
      { id: 'au', label: 'Australia' },
    ],
  },
};

export const Required: Story = {
  args: {
    isRequired: true,
    helperText: 'This field is required.',
  },
};

export const ErrorState: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Please select a valid option.',
    helperText: undefined,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const WithDisabledItem: Story = {
  args: {
    helperText: '"Durian" is unavailable.',
  },
};

export const NoLabel: Story = {
  args: {
    label: undefined,
    helperText: undefined,
    'aria-label': 'Fruit',
  },
};
