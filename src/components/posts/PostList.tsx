import { getPostList } from '@/utils/post';
import PostCard from './PostCard';

const PostList = async () => {
  const postList = await getPostList();

  return (
    <div>
      <p>
        총 <span className="font-bold">{postList.length}</span>개의 포스트가 있어요
      </p>
      <ul className="py-5">
        {postList.map((post) => (
          <PostCard
            key={post.data.title}
            post={post}
          />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
