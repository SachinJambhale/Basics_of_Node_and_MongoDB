// without express api creation

const http = require("http");
const port = 8080;

// http://127.0.0.1:8080/
// http://127.0.0.1:8080/users
// http://127.0.0.1:8080/users/id

const users = [
  { id: 1, name: "aaa", city: "pune", mobile: "11111" },
  { id: 2, name: "bbb", city: "mumbai", mobile: "222" },
  { id: 3, name: "ccc", city: "pune", mobile: "3333" },
  { id: 4, name: "ddd", city: "mumbai", mobile: "4444" },
  { id: 5, name: "eee", city: "pune", mobile: "55555" },
];

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url == "/" && method == "GET") {
    res.write("Welcome to server...");
    res.end();
  } else if (url == "/users" && method == "GET") {
    res.write(JSON.stringify(users));
    res.end();
  } else if (/^\/users\/[0-9]*$/.test(url) && method == "GET") {
    const id = url.split("/").pop();
    const user = users.find((u) => u.id == id);
    res.write(JSON.stringify(user));
    res.end();
  } else if (url == "/users" && method == "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      users.push(JSON.parse(data));
      res.write("User created");
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log("Server is listening on port " + port);
});
