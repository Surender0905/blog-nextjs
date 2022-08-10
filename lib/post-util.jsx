import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // remove .md extension

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostFiles();

  const allPostsData = postFiles.map((fileName) => {
    return getPostData(fileName);
  });
  const shortedPosts = allPostsData.sort((a, b) => {
    return a.date > b.date ? -1 : 1;
  });
  return shortedPosts;
};

export const featuredPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
