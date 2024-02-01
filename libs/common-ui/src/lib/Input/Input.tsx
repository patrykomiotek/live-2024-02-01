import { useId, forwardRef, type ComponentPropsWithRef, type Ref } from 'react';
import type { FieldError } from 'react-hook-form';
import { classMerge } from '../utils/cn';

type Props = {
  label: string;
  hint?: string;
  error?: FieldError;
} & ComponentPropsWithRef<'input'>;

export const Input = forwardRef(
  (
    { label, hint, error, className, ...rest }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const id = useId();

    return (
      <div className="py-2">
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
        <div className={error ? 'relative mt-2 rounded-md shadow-sm' : 'mt-2'}>
          <input
            ref={ref}
            id={id}
            className={classMerge(
              'block w-full dark:bg-slate-900 rounded-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-blue-500 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
              {
                'text-red-900  ring-red-300 placeholder:text-red-300 focus:ring-red-500':
                  error,
                'shadow-sm': !error,
              },
              className
            )}
            aria-describedby="email-description"
            {...rest}
          />
        </div>
        {error && (
          <>
            {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon
                className="h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            </div> */}
            <p
              className="mt-2 text-sm text-red-600 dark:text-red-500"
              id="email-error"
            >
              {error.message}
            </p>
          </>
        )}
        {hint && (
          <p
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
            id="email-description"
          >
            {hint}
          </p>
        )}
      </div>
    );
  }
);
