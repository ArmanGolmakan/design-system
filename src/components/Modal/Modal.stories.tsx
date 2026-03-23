import type { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalTrigger } from './Modal';
import Button from '../Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    role: {
      control: 'select',
      options: ['dialog', 'alertdialog'],
    },
    isDismissable: { control: 'boolean' },
  },
  args: {
    title: 'Edit profile',
    size: 'md',
    role: 'dialog',
    isDismissable: true,
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => (
    <ModalTrigger>
      <Button>Open modal</Button>
      <Modal
        {...args}
        footer={
          <>
            <Button variant="secondary" onPress={() => {}}>Cancel</Button>
            <Button variant="primary" onPress={() => {}}>Save changes</Button>
          </>
        }
      >
        <p>Make changes to your profile here. Click save when you're done.</p>
      </Modal>
    </ModalTrigger>
  ),
};

export const Confirmation: Story = {
  render: (args) => (
    <ModalTrigger>
      <Button variant="destructive">Delete account</Button>
      <Modal
        {...args}
        title="Are you sure?"
        role="alertdialog"
        isDismissable={false}
        footer={
          <>
            <Button variant="secondary" onPress={() => {}}>Cancel</Button>
            <Button variant="destructive" onPress={() => {}}>Delete account</Button>
          </>
        }
      >
        <p>
          This action cannot be undone. Your account and all associated data will be
          permanently deleted.
        </p>
      </Modal>
    </ModalTrigger>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <ModalTrigger key={size}>
          <Button variant="secondary">{size.toUpperCase()}</Button>
          <Modal
            {...args}
            size={size}
            title={`${size.toUpperCase()} modal`}
            footer={<Button onPress={() => {}}>Close</Button>}
          >
            <p>This is a <strong>{size}</strong> modal dialog.</p>
          </Modal>
        </ModalTrigger>
      ))}
    </div>
  ),
};

export const NoFooter: Story = {
  render: (args) => (
    <ModalTrigger>
      <Button variant="secondary">Open</Button>
      <Modal {...args} title="Information" footer={undefined}>
        <p>This modal has no footer. Close it using the × button or pressing Escape.</p>
      </Modal>
    </ModalTrigger>
  ),
};
