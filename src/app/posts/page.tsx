import CategoryChips from '@/components/posts/CategoryChips';
import PostList from '@/components/posts/PostList';
import { getPostList, getPostListCategory } from '@/utils/post';

const PostsPage = async () => {
  const category = getPostListCategory();
  const postList = await getPostList();

  return (
    <>
      <CategoryChips category={category} />
      <PostList postList={postList} />
    </>
  );
};

export default PostsPage;
