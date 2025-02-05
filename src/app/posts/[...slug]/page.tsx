import PostDetail from '@/components/posts/PostDetail';
import { getMDXFileList, getPostDetail } from '@/utils/post';

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

  const { data } = await getPostDetail(category, fileName);

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
