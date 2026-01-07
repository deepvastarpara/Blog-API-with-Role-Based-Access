import { blogs } from "../models/blog.model.js";

export const createBlog = (title, content, authorId) => {
  const blog = {
    id: blogs.length + 1,
    title,
    content,
    authorId,
  };
  blogs.push(blog);
  return blog;
};

export const updateBlog = (id, content) => {
  const blog = blogs.find((b) => b.id === id);
  if (!blog) return null;

  blog.content = content;
  return blog;
};

export const getBlogs = () => blogs;
