import { Schema, model, models } from "mongoose";
import { iPost } from "../postInterface";

interface iPostData extends iPost, Document {}
const postModel = new Schema<iPostData>(
  {
    desc: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

const myPostModel = models.posts || model<iPostData>("posts", postModel);
export default myPostModel;
