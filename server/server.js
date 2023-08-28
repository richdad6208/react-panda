import "dotenv/config";
import express from "express";
import postRouter from "./router/postRouter";
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
app.use("/api/post", postRouter);
