import { Post } from '@/types/post';
import Link from 'next/link';
import ArrowLeftIcon from '@/assets/icons/arrow_left.svg';
import ArrowRightIcon from '@/assets/icons/arrow_right.svg';
import { ContentType } from '@/utils/post';
import { notFound } from 'next/navigation';

interface PostNavigationProps {
  adjacent: {
    prevPost: Post;
    nextPost: Post;
  };
  content: ContentType;
}

const PostNavigation = ({ adjacent, content }: PostNavigationProps) => {
  const { prevPost, nextPost } = adjacent;

  if (!prevPost.content || !nextPost.content) return notFound();

  const getCategory = (content: ContentType, isPrev: boolean) => {
    if (content === 'snippets') return '';
    if (isPrev) return `/${prevPost.data.category}`;
    return `/${nextPost.data.category}`;
  };

  const prevLink = `/${content}${getCategory(content, true)}/${prevPost.data.fileName}`;
  const nextLink = `/${content}${getCategory(content, false)}/${nextPost.data.fileName}`;

  return (
    <>
      <div className="w-full flex flex-col sm:flex-row justify-between gap-5 my-16">
        <Link
          className="flex items-center flex-1 gap-3 border p-2 px-5 rounded-md icon-hover transition-colors"
          href={prevLink}
        >
          <ArrowLeftIcon className="flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500">이전 포스트</p>
            <p className="font-semibold line-clamp-1">{prevPost.data.title}</p>
          </div>
        </Link>
        <Link
          className="flex items-center justify-end flex-1 gap-3 border p-2 px-5 rounded-md icon-hover transition-colors text-right"
          href={nextLink}
        >
          <div>
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
