'use client';

import { Post } from '@/types/post';
import PostItem from './PostItem';
import { useSearchParams } from 'next/navigation';

interface IPostListProps {
  postList: Post[];
  children?: React.ReactNode;
}

const PostList = ({ postList, children }: IPostListProps) => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const newList = !category ? postList : postList.filter((item) => item.data.category === category);

  return (
    <div>
      {children || (
        <p>
          총 <span className="font-bold">{newList.length}</span>개의 포스트가 있어요
        </p>
      )}
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
