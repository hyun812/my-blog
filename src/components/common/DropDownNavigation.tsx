import { menus } from '@/constants/menus';
import Link from 'next/link';
import React from 'react';
import { createPortal } from 'react-dom';

const DropDownNavigation = () => {
  return createPortal(
    <div className="w-full absolute top-14 left-0 right-0">
      <div className="flex flex-col gap-1 bg-white/80 px-6 pb-2 dark:bg-neutral-900/80 backdrop-blur-sm border-b  dark:border-neutral-800">
        {menus.slice(1).map((menu) => (
          <Link
            className="rounded-lg p-2"
            key={menu.label}
            href={menu.path}
          >
            {menu.label}
          </Link>
        ))}
      </div>
    </div>,
    document.body,
  );
};

export default DropDownNavigation;
