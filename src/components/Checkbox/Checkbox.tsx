import { Checkbox as AriaCheckbox } from 'react-aria-components';
import type { CheckboxProps as AriaCheckboxProps } from 'react-aria-components';

export interface CheckboxProps extends AriaCheckboxProps {
  children?: React.ReactNode;
}

const CheckIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className="w-3 h-3">
    <path
      d="M2 6l3 3 5-5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const Checkbox = ({ children, className, ...props }: CheckboxProps) => {
  return (
    <AriaCheckbox
      className={[
        'group flex items-center gap-2 cursor-pointer select-none',
        'data-disabled:opacity-50 data-disabled:cursor-not-allowed',
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {({ isSelected }) => (
        <>
          <div
            className={[
              'w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors',
              'group-data-focus-visible:ring-2 group-data-focus-visible:ring-blue-600 group-data-focus-visible:ring-offset-2',
              isSelected
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'border-gray-300 bg-white group-data-hovered:border-blue-500',
            ].filter(Boolean).join(' ')}
          >
            {isSelected ? <CheckIcon /> : null}
          </div>
          {children && (
            <span className="text-sm text-gray-900">{children}</span>
          )}
        </>
      )}
    </AriaCheckbox>
  );
};

export default Checkbox;
