'use client';

import useDarkMode from '@/hooks/useDarkMode';
import { useEffect, useState } from 'react';
import MoonIcon from '@/assets/icons/moon.svg';
import SunIcon from '@/assets/icons/sun.svg';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useDarkMode();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <button className="h-[40px] w-[40px]"></button>;

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className="p-2 rounded-full icon-hover"
    >
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggle;
