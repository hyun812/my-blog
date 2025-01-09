'use client';

import { Post } from '@/types/post';
import PostItem from './PostItem';
import { useSearchParams } from 'next/navigation';

interface IPostListProps {
  postList: Post[];
  children: React.ReactNode;
}

const PostList = ({ postList, children }: IPostListProps) => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const newList = !category ? postList : postList.filter((item) => item.data.category === category);

  return (
    <div>
      {children}
      <ul className="pb-5">
        {newList.map((post) => (
          <PostItem
            key={post.data.title}
            post={post}
          />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
