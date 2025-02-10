'use client';

import { capitalize } from 'lodash';
import { useSearchParams } from 'next/navigation';

const CategoryChips = ({ category }: { category: string[] }) => {
  const searchParams = useSearchParams();
  const curCategory = searchParams.get('category');

  const handleCategoryClick = (categoryName: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (categoryName === curCategory) {
      params.delete('category');
    } else {
      params.set('category', categoryName);
    }

    window.history.pushState(null, '', `?${params.toString()}`);
  };

  return (
    <div className="my-10 pb-10 border-b">
      <ul className="flex items-center gap-x-1 gap-y-1 flex-wrap text-sm">
        {category.map((chip) => (
          <li
            key={chip}
            onClick={() => handleCategoryClick(chip)}
            className={`px-4 py-1 rounded-full cursor-pointer border text-white ${curCategory === chip ? 'bg-primary-600  dark:bg-primary-600' : 'bg-primary-300  pointerHover:hover:bg-primary-600 dark:bg-primary-900 dark:pointerHover:hover:bg-primary-600'}`}
          >
            <p># {capitalize(chip)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryChips;
