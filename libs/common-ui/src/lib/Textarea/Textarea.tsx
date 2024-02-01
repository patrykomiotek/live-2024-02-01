import {
  useId,
  forwardRef,
  type ForwardedRef,
  ComponentPropsWithRef,
} from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import type { FieldError } from 'react-hook-form';

type Props = {
  label: string;
  hint?: string;
  error?: FieldError;
} & ComponentPropsWithRef<'textarea'>;

export const Textarea = forwardRef(
  (
    { label, hint, error, className, ...rest }: Props,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const id = useId();
    return (
      <div className="py-2">
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className={error ? 'relative mt-2 rounded-md shadow-sm' : 'mt-2'}>
          <textarea
            id={id}
            ref={ref}
            rows={4}
            className={
              error
                ? `block w-full rounded-md border-0 py-1.5 px-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6  ${className}`
                : `block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`
            }
            {...rest}
          />
        </div>
        {error && (
          <>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon
                className="h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            </div>
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {error.message}
            </p>
          </>
        )}
        {hint && (
          <p className="mt-2 text-sm text-gray-500" id="email-description">
            {hint}
          </p>
        )}
      </div>
    );
  }
);
