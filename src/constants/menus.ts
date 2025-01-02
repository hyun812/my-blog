export interface IMenus {
  label: string;
  path: string;
}

export const menus: IMenus[] = [
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
];
