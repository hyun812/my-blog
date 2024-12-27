import { Post, PostData } from '@/types/post';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';

const BASE_PATH = 'public/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// 모든 MDX 파일 조회
export const getPostPaths = (category?: string): string[] => {
  const folder = category || '**';
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);

  return paths;
};

// 모든 포스트 목록 조회
export const getPostList = async (category?: string): Promise<Post[]> => {
  const paths = getPostPaths(category);
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
