import { ITableOfContent, Post, PostData } from '@/types/post';
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

// mdx파일 목차 추출
export const parseContents = (source: string): ITableOfContent[] => {
  return source
    .split('\n')
    .filter((line) => line.match(/(^#{1,3})\s/))
    .reduce<any>((ac, rawHeading) => {
      const nac = [...ac];
      const removeMdx = rawHeading
        .replace(/^##*\s/, '')
        .replace(/[\*,\~]{2,}/g, '')
        .replace(/(?<=\])\((.*?)\)/g, '')
        .replace(/(?<!\S)((http)(s?):\/\/|www\.).+?(?=\s)/g, '');

      const section = {
        slug: removeMdx
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣 -]/g, '')
          .replace(/\s/g, '-'),
        text: removeMdx,
      };

      const level = rawHeading.split('#').length - 1; // #의 개수를 세서 레벨을 판단

      if (level <= 2) {
        nac.push({ ...section });
      }

      return nac;
    }, []);
};

// 모든 포스트 카테고리 조회
export const getPostListCategory = (): string[] => {
  const category = sync(`${BASE_PATH}/**/`)
    .map((folderPaths) => path.basename(folderPaths))
    .filter((path) => path !== 'posts');

  return category;
};
