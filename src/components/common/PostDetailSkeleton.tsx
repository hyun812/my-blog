const PostDetailSkeleton = () => {
  return (
    <>
      <div className="pt-10 pb-5 border-b">
        <div className="w-4/5 h-11 rounded bg-basic-200 mb-5" />
        <div className="w-full h-8 rounded bg-basic-150 mb-4" />
        <div className="flex gap-3">
          <div className="w-32 h-4 rounded bg-basic-150" />
          <div className="w-24 h-4 rounded bg-basic-150" />
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-10">
        <div className="w-4/5 h-10 rounded bg-basic-200" />
        <div className="w-full h-8 rounded bg-basic-150" />
        <div className="w-3/5 h-5 rounded bg-basic-150" />
        <div className="w-full h-24 rounded bg-basic-150" />
        <div className="w-3/5 h-5 rounded bg-basic-150" />
        <div className="w-2/5 h-5 rounded bg-basic-150" />
        <div className="w-full h-24 rounded bg-basic-150" />
        <div className="w-3/5 h-5 rounded bg-basic-150" />
        <div className="w-2/5 h-5 rounded bg-basic-150" />
        <div className="w-4/5 h-5 rounded bg-basic-150" />
      </div>
    </>
  );
};

export default PostDetailSkeleton;
