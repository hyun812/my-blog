import { Post } from '@/types/post';
import { motion } from 'framer-motion';
import { capitalize } from 'lodash';
import Link from 'next/link';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const { title, description, category, emoji, date, fileName } = post.data;

  return (
    <motion.li
      whileHover={{ transform: 'translateX(10px)' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="relative group"
    >
      <div className="absolute -left-5 top-0 bottom-0 w-1 h-4/5 my-6 rounded-full bg-primary-400 invisible opacity-0 pointerHover:group-hover:visible pointerHover:group-hover:opacity-100 transition-opacity duration-700" />
      <Link href={`/posts/${category}/${fileName}`}>
        <div className="border-b text-left flex flex-col py-8 gap-2 pointerHover:hover:text-primary-400">
          <p className="text-sm text-basic-400">{capitalize(category)}</p>
          <h2 className="text-2xl font-semibold">
            {emoji} {title}
          </h2>
          <p className="text-xl">{description}</p>
          <p className="text-sm text-basic-400">{date}</p>
        </div>
      </Link>
    </motion.li>
  );
};

export default PostItem;
