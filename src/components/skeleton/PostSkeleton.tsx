const PostSkeleton = () => {
  return (
    <>
      {[...new Array(6)].map((_, idx) => (
        <div
          className="border-b flex flex-col py-6 gap-3 animate-pulse"
          key={idx}
        >
          <div className="w-7 h-3 rounded bg-basic-200 dark:bg-basic-700" />
          <div className="w-3/5 h-10 rounded bg-basic-300 dark:bg-basic-700" />
          <div className="w-full h-10 rounded bg-basic-200 dark:bg-basic-700" />
          <div className="w-16 h-3 rounded bg-basic-200 dark:bg-basic-700" />
        </div>
      ))}
    </>
  );
};

export default PostSkeleton;
