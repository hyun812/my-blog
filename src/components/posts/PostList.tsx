'use client';

import { Post } from '@/types/post';
import PostCard from './PostCard';
import { useSearchParams } from 'next/navigation';

const PostList = ({ postList }: { postList: Post[] }) => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const newList = !category ? postList : postList.filter((item) => item.data.category === category);

  return (
    <div>
      <p>
        총 <span className="font-bold">{newList.length}</span>개의 포스트가 있어요
      </p>
      <ul className="py-5">
        {newList.map((post) => (
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
