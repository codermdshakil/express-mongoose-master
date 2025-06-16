
import express, { Application, Request, Response } from "express";

const app : Application = express();


app.get('/', (req :Request , res : Response ) => {
  res.send('Hello World!')
})

app.get('/todos', (req :Request , res : Response ) => {
  res.send('Get all todos!')
})
app.post('/todos/create-todo', (req :Request , res : Response ) => {
  res.send('Get all todos!')
})



export default app;


/**
 * 
 * Basic file structure:
 * 
 * Server.ts -> Handle server like starting, closing, error handleding only related to server
 * app.js -> handle routing, middleware , route related error
 * app folder -> app business logic handling like Create, Read, Update, Delete, Database related works
 * 
 * 
*/