const http = require("http");

const person = {
  id: 1,
  name: "John Doe",
  age: 25,
};

const server = http.createServer((req, res) => {
  if (req.url === "/todos" && req.method === "GET") {
    // way - 1:  set header [recommonded]

    res.writeHead(200, {
      "content-type": "text/html",
      email: "shakil@gmail.com",
      age: "20",
      profession: "Software Engineer",
    });

    // way - 2 : set header

    // res.setHeader("content-type", "text/plain");
    // res.setHeader("gmail", "shakilahmed@gmail.com");
    // res.setHeader("age", 20);
    // res.setHeader("Target", "CEO and Chairman");
    // res.statusCode = 201;

    // res.end("Hello world"); -> "text/plain"
    // res.end(JSON.stringify(person)); -> "application/json"
    res.end(`

      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Styled Div Example</title>
  <style>
    .content-box {
      width: 400px;
      padding: 20px;
      margin: 50px auto;
      border: 2px solid #333;
      border-radius: 10px;
      background-color: #f5f5f5;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      font-family: Arial, sans-serif;
    }

    .content-box h2 {
      margin-top: 0;
      color: #007BFF;
      font-size: 24px;
    }

    .content-box p {
      color: #444;
      font-size: 16px;
      line-height: 1.5;
    }
  </style>
</head>
<body>

  <div class="content-box">
    <h2>Welcome to My Page</h2>
    <p>This is a simple description inside a styled div. You can customize the text, color, and layout using raw CSS.</p>
  </div>

</body>
</html>

      
    `);
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
