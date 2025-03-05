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
  description: '웹 프론트엔드 개발과 관련한 포스트를 작성하고 있습니다.',
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
