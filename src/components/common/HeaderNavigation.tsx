'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { menus } from '@/constants/menus';
import DropDownNavigation from './DropDownNavigation';
import useDropDownNavigation from '@/hooks/useDropDownNavigation';
import ListIcon from '@/assets/icons/list.svg';

const HeaderNavigation = () => {
  const { showDropdown, toggleDropDown } = useDropDownNavigation();

  return (
    <>
      <nav className="w-full h-16 sticky top-0 border-b font-bold z-50">
        <div className="w-full h-full glassmorphism">
          <div className="max-w-4xl lg:max-w-2xl mx-auto px-6 lg:px-0 h-full flex items-center justify-between">
            <Link href={menus[0].path}>
              <span className="text-lg font-extrabold">&lt; H /&gt;</span>
            </Link>
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
                aria-label={showDropdown ? 'Close menu' : 'Open menu'}
                onClick={toggleDropDown}
                className="visible md:hidden rounded-full p-2 icon-hover"
              >
                <ListIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        {showDropdown && <DropDownNavigation />}
      </nav>
    </>
  );
};

export default HeaderNavigation;
