const CategorySkeleton = () => {
  return (
    <div className="w-full my-10 pb-10 border-b">
      <ul className="w-full flex items-center gap-x-3 gap-y-1 flex-wrap">
        {[...new Array(6)].map((_, idx) => (
          <li
            key={idx}
            className="w-20 h-8 bg-slate-200 rounded-full"
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySkeleton;
