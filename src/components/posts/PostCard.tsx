import { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const { title, description, category, date } = post.data;

  return (
    <li className="border-b text-left flex flex-col py-5 gap-2">
      <p className="text-sm text-neutral-400">{category}</p>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-xl">{description}</p>
      <p className="text-sm text-neutral-400">{date}</p>
    </li>
  );
};

export default PostCard;
