import { Post } from '@/types/post';
import Link from 'next/link';
import ArrowLeftIcon from '@/assets/icons/arrow_left.svg';
import ArrowRightIcon from '@/assets/icons/arrow_right.svg';

interface PostNavigationProps {
  adjacent: {
    prevPost: Post;
    nextPost: Post;
  };
}

const PostNavigation = ({ adjacent }: PostNavigationProps) => {
  const { prevPost, nextPost } = adjacent;

  return (
    <>
      <div className="w-full flex flex-col sm:flex-row justify-between gap-5 my-16">
        <Link
          className="flex items-center flex-1 gap-3 border p-2 px-5 rounded-md icon-hover transition-colors"
          href={`/posts/${prevPost.data.category}/${prevPost.data.fileName}`}
        >
          <ArrowLeftIcon className="flex-shrink-0" />
          <div className="">
            <p className="text-sm text-gray-500">이전 포스트</p>
            <p className="font-semibold line-clamp-1">{prevPost.data.title}</p>
          </div>
        </Link>
        <Link
          className="flex items-center justify-end flex-1 gap-3 border p-2 px-5 rounded-md icon-hover transition-colors"
          href={`/posts/${nextPost.data.category}/${nextPost.data.fileName}`}
        >
          <div className="">
            <p className="text-sm text-gray-500">다음 포스트</p>
            <p className="font-semibold line-clamp-1">{nextPost.data.title}</p>
          </div>
          <ArrowRightIcon className="flex-shrink-0" />
        </Link>
      </div>
    </>
  );
};

export default PostNavigation;
