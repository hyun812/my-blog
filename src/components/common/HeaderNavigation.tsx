import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const HeaderNavigation = () => {
  return (
    <nav className="flex justify-between h-14 items-center">
      <div>Hi</div>
      <div className="flex gap-5">
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
        <Link href="/snippets">snippets</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default HeaderNavigation;
