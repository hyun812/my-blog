import TitleSkeleton from '@/components/common/TitleSkeleton';
import PostSkeleton from '@/components/common/PostSkeleton';
import CategorySkeleton from '@/components/common/CategorySkeleton';

const Loading = () => {
  return (
    <>
      <TitleSkeleton />
      <CategorySkeleton />
      <PostSkeleton />
    </>
  );
};

export default Loading;
