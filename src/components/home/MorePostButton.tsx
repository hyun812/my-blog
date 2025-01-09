import Link from 'next/link';

const MorePostButton = () => {
  return (
    <Link href="/posts">
      <div className="mx-auto mt-5 flex-center text-center w-3/5 h-12 bg-teal-400 text-white rounded-xl font-semibold">
        <p>모든 글 보기</p>
      </div>
    </Link>
  );
};

export default MorePostButton;
