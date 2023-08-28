import express from "express";
const postRouter = express.Router();
import Post from "../model/Post";
import Counter from "../model/Counter";

postRouter.post("", async (req, res) => {
  const { title, content, postNum } = req.body;
  try {
    const counter = await Counter.findOne({ name: "counter" });
    await Post.create({
      title,
      content,
      postNum: counter.postNum,
    });
    counter.$inc("postNum", 1);
    await counter.save();
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
    });
  }
});
postRouter.post("/list", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({
      success: true,
      posts,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
});

postRouter.post("/detail", async (req, res) => {
  try {
    const { postNum } = req.body;
    const post = await Post.findOne({ postNum });
    res.status(200).json({
      success: true,
      post,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
});

postRouter.post("/editBefore", async (req, res) => {
  try {
    const { postNum } = req.body;
    const post = await Post.findOne({ postNum });
    if (post) {
      res.status(200).json({ success: true, post });
    } else {
      res.status(400).json({ success: false });
    }
  } catch (err) {
    console.log(err);
  }
});

postRouter.post("/editAfter", async (req, res) => {
  try {
    const { title, content, postNum } = req.body;
    const newPost = await Post.updateOne({ postNum }, { title, content });
    if (!newPost) {
      res.status(404).json({ success: false });
    } else {
      res.status(200).json({ success: true });
    }
  } catch (err) {
    console.log(err);
  }
});
postRouter.post("/delete", async (req, res) => {
  const { postNum } = req.body;
  const promise = Post.deleteOne({ postNum }).exec();

  promise.then((doc) => {
    if (doc) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false });
    }
  });
});

export default postRouter;
