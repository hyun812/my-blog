import SnippetSkeleton from '@/components/common/SnippetSkeleton';
import TitleSkeleton from '@/components/common/TitleSkeleton';

const Loading = () => {
  return (
    <>
      <TitleSkeleton />
      <SnippetSkeleton />
    </>
  );
};

export default Loading;
