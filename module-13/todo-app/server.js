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
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathName = url.pathname;
  // const searchKey = url.search;

  // get all todos
  if (pathName === "/todos" && req.method === "GET") {
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
  else if (pathName === "/todos/create-todo" && req.method === "POST") {
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
  }
  // find a todo
  else if (pathName === "/todo" && req.method === "GET") {
    const name = url.searchParams.get("name");
    const allTodos = fs.readFileSync(filePath, { encoding: "utf8" });
    const allTodosData = JSON.parse(allTodos);
    const findedTodo = allTodosData.find((todo) => todo.name === name);

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(findedTodo));
  }

  // update a todo
  else if (pathName === "/todos/update-todo" && req.method === "PATCH") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      // take request body data
      const todo = JSON.parse(data);

      //  take name from url
      const name = url.searchParams.get("name");

      // get all todos
      const allTodos = fs.readFileSync(filePath, { encoding: "utf8" });
      // all todos datas
      const allTodosData = JSON.parse(allTodos);

      // finded name matched data
      const findedTodo = allTodosData.find((todo) => todo.name === name);
      findedTodo.age = todo.age;

      // update todos array with updated todo
      allTodosData.push(findedTodo);

      // 3. ✅ Write updated todos to file (FIXED)
      fs.writeFileSync(filePath, JSON.stringify(allTodosData, null, 2), {
        encoding: "utf8",
      });

      // 4. Response after writing
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(findedTodo));
    });
  }

  // delete todo
  else if (pathName === "/todos/delete-todo" && req.method === "DELETE") {

    const name = url.searchParams.get("name");

    // get all todos
    const allTodos = fs.readFileSync(filePath, { encoding: "utf8" });
    // all todos datas
    const allTodosData = JSON.parse(allTodos);

    // finded name matched data
    const filteredTodo = allTodosData.filter((todo) => todo.name !== name);

  

    // 3. ✅ Write updated todos to file without deleted Todo
    fs.writeFileSync(filePath, JSON.stringify(filteredTodo, null, 2), {
      encoding: "utf8",
    });

    // // 4. Response after writing
    res.writeHead(201, { "Content-Type": "application/json" });
    
    res.end(`${name} named todo deleted successfully!`);

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
