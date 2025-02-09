import MorePostButton from '@/components/home/MorePostButton';
import PostList from '@/components/posts/PostList';
import PostSkeleton from '@/components/skeleton/PostSkeleton';
import { getMDXFileList } from '@/utils/post';
import { Suspense } from 'react';

const HomePage = async () => {
  const postList = await getMDXFileList('posts');
  const newList = postList.slice(0, 5);

  return (
    <>
      <Suspense fallback={<PostSkeleton />}>
        <PostList postList={newList}>
          <div className="my-10">
            <p className="text-xl text-basic-500">새로운 소식</p>
            <h1 className="text-3xl font-semibold pt-3">최신 포스트를 살펴보세요</h1>
          </div>
        </PostList>
      </Suspense>
      <MorePostButton />
    </>
  );
};

export default HomePage;
