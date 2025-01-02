'use client';

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
      <ul className="flex items-center gap-x-3 gap-y-1 flex-wrap">
        {category.map((chip) => (
          <li
            key={chip}
            onClick={() => handleCategoryClick(chip)}
            className={`px-4 py-1 rounded-full cursor-pointer border text-white ${curCategory === chip ? 'bg-teal-500  dark:bg-teal-600' : 'bg-teal-300  hover:bg-teal-500 dark:bg-teal-950 dark:hover:bg-teal-600'}`}
          >
            <p>#{chip}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryChips;
