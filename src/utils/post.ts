import { Post, PostData } from '@/types/post';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import { cache } from 'react';

export type ContentType = 'posts' | 'snippets';
const BASE_PATHS = {
  posts: path.join(process.cwd(), 'public/posts'),
  snippets: path.join(process.cwd(), 'public/snippets'),
};

// 메모리 캐시를 위한 Map 객체들
const postsCache = new Map<string, Post>();
const pathsCache = new Map<ContentType, string[]>();

// 콘텐츠에 맞는 MDX 파일 경로 조회
export const getMDXFilePaths = cache((content: ContentType) => {
  const cachedPaths = pathsCache.get(content);
  if (cachedPaths) return cachedPaths;

  const contentPath = content === 'posts' ? `${BASE_PATHS[content]}/**` : BASE_PATHS[content];

  const paths = sync(`${contentPath}/**/*.mdx`);
  pathsCache.set(content, paths);

  return paths;
});

// 콘텐츠에 맞는 MDX 파일 목록 조회
export const getMDXFileList = cache(async (content: ContentType) => {
  const paths = getMDXFilePaths(content);

  const posts = await Promise.all(
    paths.map(async (path) => {
      const cachedPost = postsCache.get(path);
      if (cachedPost) return cachedPost;

      const post = await parsePost(path);
      postsCache.set(path, post);
      return post;
    }),
  );

  return posts.sort((a, b) => +new Date(b.data.date) - +new Date(a.data.date));
});

// 포스트 파일 파싱
export const parsePost = (postPath: string): Post => {
  const cachedPost = postsCache.get(postPath);
  if (cachedPost) return cachedPost;

  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);

  const post: Post = {
    data: data as PostData,
    content,
  };

  postsCache.set(postPath, post);
  return post;
};

// 이전/다음 포스트 조회
export const getAdjacentPosts = cache(async (fileName: string) => {
  const posts = await getMDXFileList('posts');
  const currentIndex = posts.findIndex((post) => post.data.fileName === fileName);

  return {
    prevPost: currentIndex > 0 ? posts[currentIndex - 1] : posts[posts.length - 1],
    nextPost: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : posts[0],
  };
});

// category와 fileName을 받아 해당 포스트 조회
export const getPostDetail = cache((category: string, fileName: string) => {
  const path = `${BASE_PATHS.posts}/${category}/${fileName}.mdx`;
  return parsePost(path);
});

// category와 fileName을 받아 해당 snippet 조회
export const getSnippetDetail = cache((fileName: string) => {
  const path = `${BASE_PATHS.snippets}/${fileName}.mdx`;
  return parsePost(path);
});

// 모든 포스트 카테고리 조회
export const getPostListCategory = (): string[] => {
  const category = sync(`${BASE_PATHS.posts}/**/`)
    .map((folderPaths) => path.basename(folderPaths))
    .filter((path) => path !== 'posts');

  return category;
};
