import {
  Modal as AriaModal,
  ModalOverlay,
  Dialog,
  Heading,
  DialogTrigger,
} from 'react-aria-components';
import type { ModalOverlayProps, DialogProps } from 'react-aria-components';
import type { ReactNode } from 'react';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps extends ModalOverlayProps {
  title?: string;
  children?: ReactNode;
  size?: ModalSize;
  /** Footer content, e.g. action buttons */
  footer?: ReactNode;
  /** Accessible role: 'dialog' (default) or 'alertdialog' for confirmations */
  role?: DialogProps['role'];
}

const sizeClasses: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full mx-4',
};

const Modal = ({
  title,
  children,
  size = 'md',
  footer,
  role = 'dialog',
  className,
  ...props
}: ModalProps) => {
  return (
    <ModalOverlay
      className={[
        'fixed inset-0 z-50 flex items-center justify-center p-4',
        'bg-black/50 backdrop-blur-sm',
        'data-entering:animate-in data-entering:fade-in data-entering:duration-200',
        'data-exiting:animate-out data-exiting:fade-out data-exiting:duration-150',
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      <AriaModal
        className={[
          'bg-white rounded-xl shadow-xl w-full outline-none',
          'data-entering:animate-in data-entering:zoom-in-95 data-entering:duration-200',
          'data-exiting:animate-out data-exiting:zoom-out-95 data-exiting:duration-150',
          sizeClasses[size],
        ].join(' ')}
      >
        <Dialog
          role={role}
          className="outline-none flex flex-col divide-y divide-gray-100"
        >
          {({ close }) => (
            <>
              <div className="flex items-center justify-between px-6 py-4">
                {title && (
                  <Heading
                    slot="title"
                    className="text-base font-semibold text-gray-900"
                  >
                    {title}
                  </Heading>
                )}
                <button
                  onClick={close}
                  aria-label="Close dialog"
                  className={[
                    'ml-auto -mr-1 p-1.5 rounded-md text-gray-400 transition-colors cursor-pointer',
                    'hover:text-gray-600 hover:bg-gray-100',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600',
                  ].join(' ')}
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="w-4 h-4"
                  >
                    <path
                      d="M3 3l10 10M13 3L3 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {children && (
                <div className="px-6 py-4 text-sm text-gray-700">
                  {children}
                </div>
              )}

              {footer && (
                <div className="px-6 py-4 flex items-center justify-end gap-3">
                  {footer}
                </div>
              )}
            </>
          )}
        </Dialog>
      </AriaModal>
    </ModalOverlay>
  );
};

export { DialogTrigger as ModalTrigger };
export default Modal;
