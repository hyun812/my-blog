import Link from 'next/link';

const MorePostButton = () => {
  return (
    <Link
      className="mx-auto mt-5 flex-center text-center w-full sm:w-3/5 h-12 bg-primary-400 pointerHover:hover:bg-primary-500 text-white rounded-xl font-semibold"
      href="/posts"
    >
      <p>모든 글 보기</p>
    </Link>
  );
};

export default MorePostButton;
