export interface PostData {
  title: string;
  description: string;
  category: string;
  date: string;
  fileName: string;
  readingTime: number;
}

export interface Post {
  data: PostData;
  content: string;
}

export interface ITableOfContent {
  slug: string;
  text: string;
}
