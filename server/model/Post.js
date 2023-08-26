import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: { type: String, require },
    content: { type: String, require },
  },
  { collection: "Post" }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
