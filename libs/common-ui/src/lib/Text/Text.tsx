import { memo } from 'react';

type Props = {
  children: string | string[];
};

export const Text = memo(({ children }: Props) => {
  return <p>{children}</p>;
});
