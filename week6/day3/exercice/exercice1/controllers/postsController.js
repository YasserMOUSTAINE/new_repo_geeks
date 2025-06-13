const Post = require('../models/postModel');

exports.getAll = async (req, res) => {
  try {
    const posts = await Post.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const post = await Post.getPostById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.create = async (req, res) => {
  try {
    const [newPost] = await Post.createPost(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Post.updatePost(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Post.deletePost(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
