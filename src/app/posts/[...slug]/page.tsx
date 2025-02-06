import PostDetail from '@/components/posts/PostDetail';
import { getMDXFileList, getContentDetail } from '@/utils/post';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export async function generateStaticParams() {
  const postList = await getMDXFileList('posts');

  return postList.map((post) => ({
    slug: [post.data.category, post.data.fileName],
  }));
}

export const generateMetadata = async ({ params }: Props) => {
  const slug = (await params).slug;
  const [category, fileName] = slug;

  const { data } = await getContentDetail('posts', fileName, category);
  if (!data.fileName) return { title: 'Page Not Found', description: '요청하신 페이지를 찾을 수 없습니다.' };

  return {
    title: data.title,
    description: data.description,
    keywords: data.tags.join(', '),
    openGraph: {
      type: 'article',
      title: data.title,
      description: data.description,
      url: `${baseUrl}/posts/${category}/${fileName}`,
      tags: data.tags,
    },
  };
};

const PostDetailPage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const [category, fileName] = slug;

  return (
    <PostDetail
      category={category}
      fileName={fileName}
    ></PostDetail>
  );
};

export default PostDetailPage;
