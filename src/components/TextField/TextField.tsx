import {
  TextField as AriaTextField,
  Label,
  Input,
  FieldError,
  Text,
} from 'react-aria-components';
import type { TextFieldProps as AriaTextFieldProps } from 'react-aria-components';

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  placeholder?: string;
}

const TextField = ({
  label,
  helperText,
  errorMessage,
  placeholder,
  className,
  ...props
}: TextFieldProps) => {
  return (
    <AriaTextField
      className={['flex flex-col gap-1 w-full', className].filter(Boolean).join(' ')}
      {...props}
    >
      {label && (
        <Label className="text-sm font-medium text-gray-700 data-disabled:opacity-50">
          {label}
          {props.isRequired && <span className="text-red-500 ml-0.5">*</span>}
        </Label>
      )}
      <Input
        placeholder={placeholder}
        className={[
          'px-3 py-2 text-sm rounded-md border border-gray-300 bg-white text-gray-900 w-full',
          'outline-none transition-colors',
          'data-hovered:border-gray-400',
          'data-focus-visible:ring-2 data-focus-visible:ring-blue-600 data-focus-visible:ring-offset-0 data-focus-visible:border-blue-600',
          'data-invalid:border-red-500 data-invalid:data-focus-visible:ring-red-500',
          'data-disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:bg-gray-50',
        ].join(' ')}
      />
      {helperText && !errorMessage && (
        <Text slot="description" className="text-xs text-gray-500">
          {helperText}
        </Text>
      )}
      <FieldError className="text-xs text-red-600">
        {errorMessage}
      </FieldError>
    </AriaTextField>
  );
};

export default TextField;
