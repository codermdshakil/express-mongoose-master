import { Types } from "mongoose";

export interface INotes {
  title: string;
  content: string;
  category: "Personal" | "Work" | "Study" | "Others";
  pinned: boolean;
  tags: {
    level: string;
    color: string;
  },
  userId:Types.ObjectId;
}

//  
