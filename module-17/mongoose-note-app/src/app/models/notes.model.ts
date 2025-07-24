import { model, Schema } from "mongoose";
import { INotes } from "../interfaces/notes.interface";

// create note schema
const noteSchema = new Schema<INotes>(
  {
  title: { type: String, required: true, trim: true },
  content: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    enum: ["Personal", "Work", "Study", "Other"],
    default: "Personal",
  },
  pinned: {
    type: Boolean,
    default: false,
  },
  tags: {
    level: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "Gray",
    },
  },
},
{
  timestamps:true,
  versionKey:false
}
);

// create note model
export const Note = model<INotes>("Note", noteSchema);

