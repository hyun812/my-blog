import { Post } from '@/types/post';
import fs, { existsSync } from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';

export type ContentType = 'posts' | 'snippets';
const BASE_PATHS = {
  posts: path.join(process.cwd(), 'public/posts'),
  snippets: path.join(process.cwd(), 'public/snippets'),
};

// 콘텐츠에 맞는 MDX 파일 경로 조회
export const getMDXFilePaths = (content: ContentType) => {
  const contentPath = content === 'posts' ? `${BASE_PATHS[content]}/**` : BASE_PATHS[content];
  const paths = sync(`${contentPath}/**/*.mdx`);

  return paths;
};

// 콘텐츠에 맞는 MDX 파일 목록 조회
export const getMDXFileList = async (content: ContentType) => {
  const paths = getMDXFilePaths(content);
  try {
    const posts = await Promise.all(paths.map(async (path) => await parsePost(path)));

    return posts.sort((a, b) => +new Date(b.data.date) - +new Date(a.data.date));
  } catch (error) {
    throw new Error(`Error parsing posts: ${error}`);
  }
};

// 포스트 파일 파싱
export const parsePost = async (postPath: string): Promise<Post> => {
  if (!existsSync(postPath)) {
    console.warn(`Post file not found: ${postPath}`);
    return DEFAULT_POST_DATA;
  }

  try {
    const file = await fs.promises.readFile(postPath, 'utf8');
    const { data, content } = matter(file);

    return {
      data: data as Post['data'],
      content,
    };
  } catch (error) {
    console.error(`Error parsing post: ${postPath}`, error);
    return DEFAULT_POST_DATA;
  }
};

export const getAdjacentContent = async (content: ContentType, fileName: string) => {
  const contents = await getMDXFileList(content);
  const currentIndex = contents.findIndex((content) => content!.data.fileName === fileName);

  return {
    prevPost: currentIndex > 0 ? contents[currentIndex - 1] : contents[contents.length - 1],
    nextPost: currentIndex < contents.length - 1 ? contents[currentIndex + 1] : contents[0],
  };
};

export const getContentDetail = (content: ContentType, fileName: string, category?: string) => {
  const basePath = BASE_PATHS[content];
  const path = category ? `${basePath}/${category}/${fileName}.mdx` : `${basePath}/${fileName}.mdx`;

  return parsePost(path);
};

// 모든 카테고리 조회
export const getPostListCategory = (): string[] => {
  return sync(`${BASE_PATHS.posts}/**/`)
    .map((folderPaths) => path.basename(folderPaths))
    .filter((path) => path !== 'posts');
};

export const DEFAULT_POST_DATA: Post = {
  data: {
    title: 'Untitled',
    date: new Date().toISOString(),
    description: '',
    tags: [],
    fileName: '',
    category: '',
    emoji: '📝',
    readingTime: 1,
  },
  content: '',
};
