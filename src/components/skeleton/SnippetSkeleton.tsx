const SnippetSkeleton = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 animate-pulse">
      {[...new Array(6)].map((_, idx) => (
        <div
          key={idx}
          className="border rounded-lg p-5"
        >
          <div className="w-full h-5 rounded mb-2 bg-basic-200 dark:bg-basic-700" />
          <div className="w-2/5 h-3 rounded bg-basic-150 dark:bg-basic-700" />
        </div>
      ))}
    </div>
  );
};

export default SnippetSkeleton;
