
import express, { Request, Response } from 'express';
import { model, Schema } from 'mongoose';

const notesRouter = express.Router();

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


// create a note
notesRouter.post("/create-note", async (req: Request, res: Response) => {


  // Approch - 1
  // const {title, content,category ,pinned, tags} = req.body;

  // const myNote = new Note({
  //   title,
  //   content,
  //   category,
  //   pinned, 
  //   tags
  // });
  
  // await myNote.save();


  // approch - 2 - Create + Save
  const body = req.body;

  const myNote = await Note.create(body);


  res.status(201).json({
    success: true,
    message: `Note created successfully!`,
    note: myNote,
  });
});

// get all notes
notesRouter.get("/notes", async (req: Request, res: Response) => {
  try {

    const notes = await Note.find(); 
    
    res.status(200).json(notes);

  } catch (err) {

    res.status(500).json({ error: "Failed to fetch notes" });

  }
});

// get a Single Note using Id
notesRouter.get("/notes/:id", (req: Request, res: Response) => {
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

// update a single note
notesRouter.patch('/update-note/:id', async (req: Request, res: Response) => {
  
  const id = req.params.id;
  const body = req.body;

  console.log(id);  
  console.log('body', body);  


  const note = await Note.findByIdAndUpdate(id, body, {new:true});
  // const note = await Note.updateOne({_id:id}, body, {new:true});
  // const note = await Note.findOneAndUpdate({_id:id}, body, {new:true});
  console.log('note', note);
  res.status(201).json({
    success: true,
    message: `Note created successfully!`,
    note: note,
  });

})

// delete a note 
notesRouter.delete('/delete-note/:id', async (req: Request, res: Response) => {
  
  const id = req.params.id;

   
  const note = await Note.findByIdAndDelete(id);
  // const note = await Note.findOneAndDelete({_id:id});
  // const note = await Note.deleteOne({_id: id});
  console.log('note', note);
  res.status(201).json({
    success: true,
    message: `Note Delete successfully!`,
    note: note,
  });

})



export default notesRouter;
