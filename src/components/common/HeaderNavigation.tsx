'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { ICONS } from '@/constants/Icons';
import { menus } from '@/constants/menus';
import DropDownNavigation from './DropDownNavigation';
import useDropDownNavigation from '@/hooks/useDropDownNavigation';

const HeaderNavigation = () => {
  const { showDropdown, toggleDropDown } = useDropDownNavigation();

  return (
    <>
      <nav className="sticky top-0 h-16 border-b font-bold z-50 w-full glassmorphism">
        <div className="max-w-4xl lg:max-w-2xl mx-auto px-8 lg:px-0 h-full flex items-center justify-between ">
          <Link href={menus[0].path}>{menus[0].label}</Link>
          <div className="flex">
            <div className="hidden md:flex">
              {menus.slice(1).map((menu) => (
                <Link
                  key={menu.label}
                  href={menu.path}
                  className="py-2 px-4 rounded-md icon-hover"
                >
                  {menu.label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
            <button
              onClick={toggleDropDown}
              className="visible md:hidden rounded-full p-2 icon-hover"
            >
              {ICONS.LIST}
            </button>
          </div>
        </div>
        {showDropdown && <DropDownNavigation />}
      </nav>
    </>
  );
};

export default HeaderNavigation;
