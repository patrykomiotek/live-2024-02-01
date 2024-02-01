import { ComponentProps } from 'react';

import { classMerge } from '../utils/cn';

type Props = {
  children: React.ReactNode;
} & ComponentProps<'h1'>;

export const Header = ({ children, className }: Props) => {
  return (
    <h1
      className={classMerge(
        'text-3xl font-bold mb-2 text-gray-700 dark:text-gray-300',
        className
      )}
    >
      {children}
    </h1>
  );
};
