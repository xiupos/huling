import { globby } from 'globby';
import matter from 'gray-matter';
import fs from 'fs-extra';

export async function sidebar(parant: string) {
  const posts = await getPosts(parant);
  const sections = Array.from(new Set(posts.map((post) => post.frontMatter.section).filter((post) => post)));

  return sections.map((section) => {
    return {
      text: section,
      items: posts
        .filter((post) => post.frontMatter.section == section)
        .map((post) => {
          return {
            text: post.frontMatter.title,
            link: post.path.replace('src', ''),
          };
        }),
    };
  });
}

async function getMDFilePaths(parent: string) {
  const paths = await globby(['**.md'], {
    ignore: ['node_modules', 'README.md'],
  });
  return paths.filter((path) => path.includes(parent));
}

async function getPosts(parent: string) {
  const posts = await Promise.all(
    (
      await getMDFilePaths(parent)
    ).map(async (path) => {
      const content = await fs.readFile(path, 'utf-8');
      const { data } = matter(content);
      return { frontMatter: data, path: path.replace('src', '') };
    }),
  );

  return posts;
}