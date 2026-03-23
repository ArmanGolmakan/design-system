import {
  Select as AriaSelect,
  SelectValue,
  Button,
  Label,
  Popover,
  ListBox,
  ListBoxItem,
  Text,
  FieldError,
} from 'react-aria-components';
import type {
  SelectProps as AriaSelectProps,
  ListBoxItemProps,
} from 'react-aria-components';
import type { ReactNode } from 'react';

export interface SelectItem {
  id: string | number;
  label: string;
  isDisabled?: boolean;
}

export interface SelectProps<T extends SelectItem = SelectItem>
  extends Omit<AriaSelectProps<T>, 'children'> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  placeholder?: string;
  items?: T[];
  children?: ReactNode | ((item: T) => ReactNode);
}

const ChevronIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="w-4 h-4 text-gray-400 pointer-events-none"
  >
    <path
      d="M4 6l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SelectOption = ({ children, ...props }: ListBoxItemProps) => (
  <ListBoxItem
    className={[
      'px-3 py-2 text-sm rounded-md cursor-pointer outline-none',
      'text-gray-900 transition-colors',
      'data-focused:bg-blue-600 data-focused:text-white',
      'data-selected:font-medium',
      'data-disabled:opacity-40 data-disabled:cursor-not-allowed',
    ].join(' ')}
    {...props}
  >
    {children}
  </ListBoxItem>
);

function Select<T extends SelectItem = SelectItem>({
  label,
  helperText,
  errorMessage,
  placeholder = 'Select an option',
  items,
  children,
  className,
  ...props
}: SelectProps<T>) {
  return (
    <AriaSelect
      className={['flex flex-col gap-1 w-full', className].filter(Boolean).join(' ')}
      {...props}
    >
      {label && (
        <Label className="text-sm font-medium text-gray-700 data-disabled:opacity-50">
          {label}
          {props.isRequired && <span className="text-red-500 ml-0.5">*</span>}
        </Label>
      )}

      <Button
        className={[
          'flex items-center justify-between px-3 py-2 text-sm rounded-md border border-gray-300 bg-white text-left w-full',
          'outline-none transition-colors cursor-pointer',
          'data-hovered:border-gray-400',
          'data-focus-visible:ring-2 data-focus-visible:ring-blue-600 data-focus-visible:border-blue-600',
          'data-invalid:border-red-500',
          'data-disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:bg-gray-50',
        ].join(' ')}
      >
        <SelectValue className="data-placeholder:text-gray-400 truncate">
          {({ selectedText }) => selectedText || placeholder}
        </SelectValue>
        <ChevronIcon />
      </Button>

      {helperText && !errorMessage && (
        <Text slot="description" className="text-xs text-gray-500">
          {helperText}
        </Text>
      )}
      <FieldError className="text-xs text-red-600">{errorMessage}</FieldError>

      <Popover className="w-[--trigger-width] outline-none">
        <ListBox
          items={items}
          className={[
            'p-1 rounded-lg border border-gray-200 bg-white shadow-lg outline-none',
            'max-h-60 overflow-y-auto',
          ].join(' ')}
        >
          {children
            ? (children as (item: T) => ReactNode)
            : (item: T) => (
                <SelectOption
                  key={item.id}
                  id={item.id}
                  isDisabled={item.isDisabled}
                >
                  {item.label}
                </SelectOption>
              )}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

export default Select;
