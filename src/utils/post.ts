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

  const postData: PostData = {
    title: data.title,
    description: data.description,
    category: data.category,
    date: data.date,
  };

  return { data: postData, content };
};
