import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

// create note schema
const noteSchema = new Schema({
  title: String,
  content: String,
});

// create note model
const Note = model("Note", noteSchema);

app.post("/create-note", async (req: Request, res: Response) => {

  const myNote = new Note({
     title: "Mongoose",
     content: "Learning Mongoose",
  });

  await myNote.save();

  res.status(201).json({
    success:true,
    message:`${myNote.title} note created successfully!`,
    note:myNote
  })
});


// get a Single Note using Id
app.get('/notes/:id', (req: Request, res: Response) => {

  const id = req.params.id;

  Note.findById(id)
  .then(user => {
    if (user) {
      console.log('Found Note:', user);
      res.json(user)
    } else {
      console.log('User not found.');
    }
  })
  .catch(err => {
    console.error('Error finding user:', err);
  });
 

})

export default app;
