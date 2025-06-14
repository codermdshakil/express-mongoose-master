
const http = require('http');

const server = http.createServer((req, res) => {

  if(req.url === "/todos" && req.method ==="GET"){
    res.end("All todos here")
  }
  else if(req.url === "/todos/create-todo" && req.method === "POST"){
    res.end("Create a new Todo!")
  }
  else{
    res.end("Enter valid url and method");
  }


})

server.listen(5000, () =>{
  console.log("Server is running on port ", 5000);

})


/**
 * 
 * /todos -> GET -> get all todos
 * /todos/create-todo -> POST -> create a new todo
 * 
 * 
 * 
 * */ 