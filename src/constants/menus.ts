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
    label: 'about',
    path: '/about',
  },
  {
    label: 'posts',
    path: '/posts',
  },
  {
    label: 'snippets',
    path: '/snippets',
  },
];
