import { siteConfig } from '@/constants/site';
import Link from 'next/link';

const DropDownNavigation = () => {
  return (
    <div className="w-full h-36 absolute top-full left-0 right-0 z-40">
      <div className="glassmorphism flex flex-col gap-1 px-6 py-2 border-t border-b font-semibold">
        {siteConfig.menus.slice(1).map((menu) => (
          <Link
            className="rounded-lg p-2 icon-hover"
            key={menu.label}
            href={menu.path}
          >
            {menu.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropDownNavigation;
