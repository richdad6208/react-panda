import express from "express";
import Post from "../model/Post";
import Counter from "../model/Counter";
import { upload } from "../middleware";

const postRouter = express.Router();

postRouter.post("", async (req, res) => {
  const { title, content, filePath, postNum } = req.body;
  console.log("filePath", filePath);
  try {
    const counter = await Counter.findOne({ name: "counter" });
    const post = await Post.create({
      title,
      content,
      postNum: counter.postNum,
      filePath,
    });
    console.log(post);
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
  // const promise = Post.deleteOne({ postNum }).exec();

  // promise.then((doc) => {
  //   if (doc) {
  //     res.status(200).json({ success: true });
  //   } else {
  //     res.status(400).json({ success: false });
  //   }
  // });
  try {
    await Post.deleteOne({ postNum });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, errorMessage: err });
  }
});

postRouter.post("/imageUpload", upload.single("postImage"), (req, res) => {
  console.log(req.file.location);
  if (req.file) {
    res.status(200).json({ success: true, filePath: req.file.location });
  } else {
    res.status(400).json({ success: false });
  }
});

export default postRouter;
