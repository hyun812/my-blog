import { Post } from '@/types/post';

export class ContentCache<T> {
  private cache = new Map<string, T>();

  get(key: string): T | undefined {
    return this.cache.get(key);
  }

  set(key: string, value: T): void {
    this.cache.set(key, value);
  }

  clear(): void {
    this.cache.clear();
  }
}

export const cacheInstance = {
  posts: new ContentCache<Post>(),
  paths: new ContentCache<string[]>(),
};
