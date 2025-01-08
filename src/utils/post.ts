import { Post, PostData } from '@/types/post';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';

export type ContentType = 'posts' | 'snippets';

const BASE_POSTS_PATH = 'public/posts';
const BASE_SNIPPET_PATH = 'public/snippets';

const POSTS_PATH = path.join(process.cwd(), BASE_POSTS_PATH);
const SNIPPET_PATH = path.join(process.cwd(), BASE_SNIPPET_PATH);

// 콘텐츠에 맞는 MDX 파일 경로 조회
export const getMDXFilePaths = (content: ContentType) => {
  const CONTENT_PATH = content === 'posts' ? POSTS_PATH + '/**' : SNIPPET_PATH;
  const paths: string[] = sync(`${CONTENT_PATH}/**/*.mdx`);

  return paths;
};

// 콘텐츠에 맞는 MDX 파일 목록 조회
export const getMDXFileList = async (content: ContentType) => {
  const paths = getMDXFilePaths(content);

  const posts = await Promise.all(paths.map((path) => parsePost(path)));
  return posts;
};

// 포스트 파일 파싱
export const parsePost = (postPath: string): Post => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);

  const postData = data as PostData;

  return { data: postData, content };
};

// category와 fileName을 받아 해당 포스트 조회
export const getPostDetail = (category: string, fileName: string) => {
  const path = `${POSTS_PATH}/${category}/${fileName}.mdx`;
  const post = parsePost(path);

  return post;
};

// category와 fileName을 받아 해당 포스트 조회
export const getSnippetDetail = (fileName: string) => {
  const path = `${SNIPPET_PATH}/${fileName}.mdx`;
  const post = parsePost(path);

  return post;
};

// 모든 포스트 카테고리 조회
export const getPostListCategory = (): string[] => {
  const category = sync(`${BASE_POSTS_PATH}/**/`)
    .map((folderPaths) => path.basename(folderPaths))
    .filter((path) => path !== 'posts');

  return category;
};
