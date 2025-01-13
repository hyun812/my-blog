const PostSkeleton = () => {
  return (
    <div className="w-full border-b flex flex-col py-6 gap-2 animate-pulse">
      {[...new Array(6)].map((_, idx) => (
        <div key={idx}>
          <div className="w-7 h-3 rounded bg-basic-200"></div>
          <div className="w-3/5 h-10 rounded bg-basic-300"></div>
          <div className="w-full h-10 rounded bg-basic-200"></div>
          <div className="w-16 h-3 rounded bg-basic-200"></div>
        </div>
      ))}
    </div>
  );
};

export default PostSkeleton;
