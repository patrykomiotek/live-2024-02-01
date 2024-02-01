'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import { classMerge } from '@jobboard/common-ui';

type Props = LinkProps & { children: string }; // LinkProps

export const NavLink = ({ href, children, ...props }: Props) => {
  const currentPath = usePathname();
  // const isActive = currentPath.includes(href.toString());
  const isActive = currentPath === href;

  return (
    <Link
      href={href}
      className={classMerge('hover:text-blue-400', {
        'text-red-500': isActive,
        'text-blue-400': !isActive,
      })}
      {...props}
    >
      {children}
    </Link>
  );
};
