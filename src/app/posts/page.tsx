import CategoryChips from '@/components/posts/CategoryChips';
import PostList from '@/components/posts/PostList';
import { getMDXFileList, getPostListCategory } from '@/utils/post';

const PostsPage = async () => {
  const category = getPostListCategory();
  const postList = await getMDXFileList('posts');

  return (
    <>
      <div className="my-10">
        <h1 className="text-3xl font-bold pb-3">Posts</h1>
        <p>전체 포스트 목록을 확인해보세요</p>
      </div>
      <CategoryChips category={category} />
      <PostList postList={postList} />
    </>
  );
};

export default PostsPage;
