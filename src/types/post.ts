export interface PostData {
  title: string;
  description: string;
  category: string;
  emoji: string;
  tags: string[];
  date: string;
  fileName: string;
  readingTime: number;
}

export interface Post {
  data: PostData;
  content: string;
}

export interface ITableOfContent {
  id: string;
  textContent: string | null;
  level: number;
  absoluteTop: number;
}
