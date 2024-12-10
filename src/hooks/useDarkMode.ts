import { useTheme } from 'next-themes';

const useDarkMode = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const isThemeDark = resolvedTheme === 'dark';
  const toggleTheme = () => {
    return isThemeDark ? setTheme('light') : setTheme('dark');
  };

  return {
    theme: resolvedTheme,
    toggleTheme,
  };
};

export default useDarkMode;
