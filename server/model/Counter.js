import mongoose from "mongoose";
const { Schema } = mongoose;

const CounterSchema = new Schema(
  {
    name: String,
    postNum: { type: Number },
  },
  { collection: "Counter" }
);

const Counter = mongoose.model("Counter", CounterSchema);
export default Counter;
