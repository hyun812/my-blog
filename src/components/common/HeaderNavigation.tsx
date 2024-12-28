'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
import { ICONS } from '@/constants/Icons';
import { menus } from '@/constants/menus';
import DropDownNavigation from './DropDownNavigation';

const HeaderNavigation = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menuOpenHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="sticky self-start top-0 h-16 border-b font-bold bg-white/80 dark:bg-neutral-900/90 backdrop-blur-sm z-50">
      <div className="max-w-4xl lg:max-w-2xl mx-auto px-8 h-full flex items-center justify-between">
        <Link href={menus[0].path}>{menus[0].label}</Link>
        <div className="flex">
          <div className="hidden md:flex">
            {menus.slice(1).map((menu) => (
              <Link
                key={menu.label}
                href={menu.path}
                className="py-2 px-4 rounded-md"
              >
                {menu.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
          <button
            onClick={menuOpenHandler}
            className="visible md:hidden rounded-full p-2"
          >
            {ICONS.LIST}
          </button>
        </div>
        {menuOpen && <DropDownNavigation />}
      </div>
    </nav>
  );
};

export default HeaderNavigation;
