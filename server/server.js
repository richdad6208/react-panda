import "dotenv/config";
import express from "express";
import Post from "./model/Post";
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
  const { title, content } = req.body;
  try {
    await Post.create({
      title,
      content,
    });
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
});
app.post("/api/post/list", async (req, res) => {
  try {
    const posts = await Post.find({});
    console.log(posts);
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
