const http = require("http");
const path = require("path");
const fs = require("fs");

// fs.readFile("./todo-app/db/todo.json", {encoding:"utf8"},(err, data) => {
//   if(err){
//     console.log('Error', err);
//   }
//   else{
//     console.log(data);
//   }
// })

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {
  // get all todos
  if (req.url === "/todos" && req.method === "GET") {
    const data = fs.readFileSync("./todo-app/db/todo.json", {
      encoding: "utf8",
    });

    // way - 1:  set header [recommonded]
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  }
  // Create a new todo
  else if (req.url === "/todos/create-todo" && req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const todo = JSON.parse(data);

      // 1. Read existing todos
      const allTodos = fs.readFileSync(filePath, { encoding: "utf8" });
      const parseDatas = JSON.parse(allTodos);

      // 2. Add new todo
      parseDatas.push(todo);

      // 3. ✅ Write updated todos to file (FIXED)
      fs.writeFileSync(filePath, JSON.stringify(parseDatas, null, 2), {
        encoding: "utf8",
      });

      // 4. Response after writing
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Todo created successfully!" }));
    });
    
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
