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
    <nav className="w-full flex h-11 items-center font-bold justify-between my-3">
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
    </nav>
  );
};

export default HeaderNavigation;
