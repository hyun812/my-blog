'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const useDropDownNavigation = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleDropDown = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowDropdown(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setShowDropdown(false);
  }, [pathname]);

  return { showDropdown, toggleDropDown };
};

export default useDropDownNavigation;
