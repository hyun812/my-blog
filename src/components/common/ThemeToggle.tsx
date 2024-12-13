'use client';

import { ICONS } from '@/constants/Icons';
import useDarkMode from '@/hooks/useDarkMode';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useDarkMode();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <button className="h-6 w-6 p-2"></button>;

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className="p-2 rounded-full"
    >
      {theme === 'dark' ? ICONS.SUN : ICONS.MOON}
    </button>
  );
};

export default ThemeToggle;
