import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

// create note schema
const noteSchema = new Schema({
  title:{type: String, required:true, trim:true},
  content: {
    type: String,
    default:''
  },
  category:{
    type:String,
    enum:["Personal", "Work", "Study", "Other"],
    default:"Personal"
  },
  pinned:{
    type:Boolean,
    default:false
  },
  tags:{
    level:{
      type:String,
      required:true
    },
    color:{
      type:String,
      default:"Gray"
    }
  }
});

// create note model
const Note = model("Note", noteSchema);

// get all notes

app.get("/notes", async (req: Request, res: Response) => {
  try {

    const notes = await Note.find(); 
    
    res.status(200).json(notes);

  } catch (err) {

    res.status(500).json({ error: "Failed to fetch notes" });

  }
});

// create a note
app.post("/create-note", async (req: Request, res: Response) => {

  const {title, content,category ,pinned, tags} = req.body;

  const myNote = new Note({
    title,
    content,
    category,
    pinned, 
    tags
  });

  await myNote.save();

  res.status(201).json({
    success: true,
    message: `${myNote.title} note created successfully!`,
    note: myNote,
  });
});

// get a Single Note using Id
app.get("/notes/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  Note.findById(id)
    .then((user) => {
      if (user) {
        console.log("Found Note:", user);
        res.json(user);
      } else {
        console.log("User not found.");
      }
    })
    .catch((err) => {
      console.error("Error finding user:", err);
    });
});

export default app;
