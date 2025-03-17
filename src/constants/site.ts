export interface ISiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  menus: IMenus[];
}

export interface IMenus {
  label: string;
  path: string;
}

export const siteConfig: ISiteConfig = {
  name: '승현이의 개발 블로그',
  description:
    'React, Next.js, JavaScript 등 웹 프론트엔드 개발과 관련된 글을 공유하는 블로그입니다. 다양한 프로젝트를 진행하며 경험한 문제 해결 과정과 학습 내용을 정리합니다.',
  url: 'https://hyun812.vercel.app',
  author: 'Lee Seung Hyun',
  menus: [
    {
      label: 'Hi',
      path: '/',
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Posts',
      path: '/posts',
    },
    {
      label: 'Snippets',
      path: '/snippets',
    },
  ],
};
