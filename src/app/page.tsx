import DeferredComponent from '@/components/common/DeferredComponent';
import PostSkeleton from '@/components/common/PostSkeleton';
import MorePostButton from '@/components/home/MorePostButton';
import PostList from '@/components/posts/PostList';
import { getMDXFileList } from '@/utils/post';
import { Suspense } from 'react';

const HomePage = async () => {
  const postList = await getMDXFileList('posts');
  const newList = postList.slice(0, 5);

  return (
    <div>
      <Suspense
        fallback={
          <DeferredComponent>
            <PostSkeleton />
          </DeferredComponent>
        }
      >
        <PostList postList={newList}>
          <div className="my-10">
            <p className="text-xl text-basic-500">새로운 소식</p>
            <h1 className="text-3xl font-semibold pt-3">최신 포스트를 살펴보세요</h1>
          </div>
        </PostList>
      </Suspense>
      <MorePostButton />
    </div>
  );
};

export default HomePage;
