export interface PostData {
  title: string;
  description: string;
  category: string;
  date: string;
}

export interface Post {
  data: PostData;
  content: string;
}
