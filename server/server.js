import "dotenv/config";
import express from "express";
import Post from "./model/Post";
import Counter from "./model/Counter";
import path from "path";
import "./db";
const app = express();
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`SERVER🟢 IN ${PORT}`);
});
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
app.post("/api/post", async (req, res) => {
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
app.post("/api/post/list", async (req, res) => {
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

app.post("/api/post/detail", async (req, res) => {
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

app.post("/api/editBefore", async (req, res) => {
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

app.post("/api/editAfter", async (req, res) => {
  const { title, content, postNum } = req.body;
  await Post.updateOne;
});
