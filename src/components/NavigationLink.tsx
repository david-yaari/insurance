'use client';

import clsx from 'clsx';
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import type {AppPathnames} from '@/config';
import {Link} from '@/navigation';

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'hidden h-full lg:flex  px-2 py-3 transition-colors regular-16 cursor-pointer',
        isActive ? 'text-black' : 'text-gray-400 hover:font-bold'
      )}
      href={href}
      {...rest}
    />
  );
}
