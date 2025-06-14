const http = require("http");
const path = require('path');
const fs = require('fs');

const person = {
  id: 1,
  name: "John Doe",
  age: 25,
};


// fs.readFile("./todo-app/db/todo.json", {encoding:"utf8"},(err, data) => {
//   if(err){
//     console.log('Error', err);
//   }
//   else{
//     console.log(data);
//   }
// })
 

const filePath = path.join(__dirname, "./todo-app/db/todo.json")


const server = http.createServer((req, res) => {

  if (req.url === "/todos" && req.method === "GET") {
    
    const data = fs.readFileSync('./todo-app/db/todo.json', {encoding:"utf8"});
    // way - 1:  set header [recommonded]
    res.writeHead(200, {
      "content-type":"application/json",
      
    })

    res.end(data);


  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end("Create a new Todo!");
  } else {
    res.end("Enter valid url and method");
  }
});

server.listen(5000, () => {
  console.log("Server is running on port ", 5000);
});

/**
 *
 * /todos -> GET -> get all todos
 * /todos/create-todo -> POST -> create a new todo
 *
 *
 *
 * */
