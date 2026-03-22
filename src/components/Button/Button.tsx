import { Button as AriaButton } from 'react-aria-components';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';

type Variant = 'primary' | 'secondary' | 'destructive';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends AriaButtonProps {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-blue-600 text-white data-hovered:bg-blue-700 data-pressed:bg-blue-800',
  secondary: 'bg-white text-gray-900 border border-gray-300 data-hovered:bg-gray-50 data-pressed:bg-gray-100',
  destructive: 'bg-red-600 text-white data-hovered:bg-red-700 data-pressed:bg-red-800',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
};

const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <AriaButton
      className={[
        'inline-flex items-center justify-center font-medium rounded-md transition-colors cursor-pointer',
        'data-focus-visible:ring-2 data-focus-visible:ring-blue-600 data-focus-visible:ring-offset-2 data-focus-visible:outline-none',
        'data-disabled:opacity-50 data-disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </AriaButton>
  );
};

export default Button;