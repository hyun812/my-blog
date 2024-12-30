import { Post } from '@/types/post';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const { title, description, category, date, fileName } = post.data;

  return (
    <motion.div
      whileHover={{ transform: 'translateX(10px)' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="relative group"
    >
      <div className="absolute -left-5 top-0 bottom-0 w-1 h-4/5 my-6 rounded-full bg-teal-400 dark:bg-teal-500 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-700" />
      <div>
        <Link href={`/posts/${category}/${fileName}`}>
          <li className="border-b text-left flex flex-col py-8 gap-2 hover:text-teal-400 dark:hover:text-teal-500">
            <p className="text-sm text-neutral-400">{category}</p>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-xl">{description}</p>
            <p className="text-sm text-neutral-400">{date}</p>
          </li>
        </Link>
      </div>
    </motion.div>
  );
};

export default PostCard;
