import CategoryChips from '@/components/post_list/CategoryChips';
import PostList from '@/components/post_list/PostList';
import { getMDXFileList, getPostListCategory } from '@/utils/post';
import { Suspense } from 'react';
import PostSkeleton from '@/components/skeleton/PostSkeleton';
import CategorySkeleton from '@/components/skeleton/CategorySkeleton';

const PostsPage = async () => {
  const category = getPostListCategory();
  const postList = await getMDXFileList('posts');

  return (
    <>
      <div className="my-10">
        <h1 className="text-3xl font-bold pb-3">Posts</h1>
        <p>전체 포스트 목록을 확인해보세요</p>
      </div>
      <Suspense fallback={<CategorySkeleton />}>
        <CategoryChips category={category} />
      </Suspense>
      <Suspense fallback={<PostSkeleton />}>
        <PostList postList={postList} />
      </Suspense>
    </>
  );
};

export default PostsPage;
