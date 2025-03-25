import { writeFileSync } from 'fs';
import path from 'path';
import { Feed } from 'feed';
import { getMDXFileList } from '../utils/post';
import { siteConfig } from '../constants/site';

const master = {
  name: siteConfig.name,
  email: siteConfig.email,
  link: siteConfig.url,
};

function writeFeedFile(fileName: string, content: string) {
  const outputPath = path.join(process.cwd(), 'public', fileName);
  writeFileSync(outputPath, content, 'utf-8');
}

async function generateRSS() {
  const postList = await getMDXFileList('posts');
  const snippetList = await getMDXFileList('snippets');

  const feed = new Feed({
    title: siteConfig.name,
    description: siteConfig.description,
    id: siteConfig.url,
    link: siteConfig.url,
    language: 'ko',
    image: `${siteConfig.url}/image/profile.png`,
    favicon: `${siteConfig.url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${siteConfig.author}`,
    author: master,
  });

  postList.forEach((post) => {
    feed.addItem({
      title: post.data.title,
      id: `${siteConfig.url}/posts/${post.data.category}/${post.data.fileName}`,
      link: `${siteConfig.url}/posts/${post.data.category}/${post.data.fileName}`,
      description: post.data.description,
      content: post.content,
      author: [master],
      contributor: [master],
      date: new Date(post.data.date),
    });
  });

  snippetList.forEach((snippet) => {
    feed.addItem({
      title: snippet.data.title,
      id: `${siteConfig.url}/snippets/${snippet.data.fileName}`,
      link: `${siteConfig.url}/snippets/${snippet.data.fileName}`,
      description: snippet.data.description,
      content: snippet.content,
      author: [master],
      contributor: [master],
      date: new Date(snippet.data.date),
    });
  });

  feed.addCategory('Technologies');

  writeFeedFile('feed.xml', feed.rss2());
  writeFeedFile('atom.xml', feed.atom1());
  writeFeedFile('feed.json', feed.json1());
}

generateRSS();
