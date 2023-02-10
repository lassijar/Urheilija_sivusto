const Post = require("../models/Post");

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();
    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    let postId = Number(req.params.id);
    let [post, _] = await Post.findById(postId);
    res.status(200).json({ post: post[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewPost = async (req, res, next) => {
  try {
    let { names, birth, weight, sport, achievements, link } = req.body;
    let post = new Post(names, birth, weight, sport, achievements, link);
    post = await post.save();
    res.status(201).json({ message: "Post created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updatePostById = async (req, res, next) => {
  try {
    let { names, birth, weight, sport, achievements, link } = req.body;
    let postId = Number(req.params.id);

    let post = Post.updateById(
      postId,
      names,
      birth,
      weight,
      sport,
      achievements,
      link
    );
    res.status(201).json({ message: "Post updated" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deletePostById = async (req, res, next) => {
  try {
    let postId = Number(req.params.id);
    let [post, _] = await Post.findById(postId);
    await Post.deleteById(postId);
    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
