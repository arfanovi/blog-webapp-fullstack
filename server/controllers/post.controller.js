const Post = require("../models/post.model");
const User = require("../models/user.model");
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const unlinkAsync = promisify(fs.unlink);

exports.createPost = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const author = req.user.id;

    if (!title || !content || !category) {
      return res.status(400).json({ message: "Title, content, and category are required." });
    }

    const newPost = new Post({
      title,
      content,
      category,
      author,
      image: req.file ? req.file.path : "",
    });

    await newPost.save();
    return res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating post", error: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "name email").sort({ createdAt: -1 });
    return res.status(200).json({ posts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching posts", error: error.message });
  }
};

exports.getSinglePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId).populate("author", "name email");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({ post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching post", error: error.message });
  }
};

exports.getPostsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const posts = await Post.find({ category }).populate("author", "name email").sort({ createdAt: -1 });

    if (!posts.length) {
      return res.status(404).json({ message: `No posts found in the category: ${category}` });
    }

    return res.status(200).json({ posts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching posts by category", error: error.message });
  }
};

exports.getPostsByAuthor = async (req, res) => {
  try {
    const authorId = req.params.authorId;
    const posts = await Post.find({ author: authorId }).populate("author", "name email").sort({ createdAt: -1 });

    if (!posts.length) {
      return res.status(404).json({ message: `No posts found for the author with ID: ${authorId}` });
    }

    return res.status(200).json({ posts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching posts by author", error: error.message });
  }
};

exports.editPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content, category } = req.body;

    if (!title || !content || !category) {
      return res.status(400).json({ message: "Title, content, and category are required." });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "You can only edit your own posts" });
    }

    post.title = title || post.title;
    post.content = content || post.content;
    post.category = category || post.category;

    if (req.file) {
      post.image = req.file.path;
    }

    await post.save();

    return res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updating post", error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "You can only delete your own posts" });
    }

    if (post.image) {
      const imagePath = path.join(__dirname, "..", post.image);
      try {
        await unlinkAsync(imagePath);
        console.log("Image deleted successfully");
      } catch (err) {
        console.error("Error deleting image:", err);
        return res.status(500).json({ message: "Error deleting image", error: err.message });
      }
    }

    await Post.findByIdAndDelete(postId);

    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error deleting post", error: error.message });
  }
};
