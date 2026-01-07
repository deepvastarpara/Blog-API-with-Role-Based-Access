import * as blogService from "../services/blog.service.js";

export const create = (req, res) => {
  const { title, content } = req.body;
  const blog = blogService.createBlog(
    title,
    content,
    req.user.id
  );
  res.status(201).json(blog);
};

export const update = (req, res) => {
  const blog = blogService.updateBlog(
    Number(req.params.id),
    req.body.content
  );
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  res.json(blog);
};

export const list = (req, res) => {
  res.json(blogService.getBlogs());
};
