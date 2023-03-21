// api creation using express js

const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const port = 8080;

// http://127.0.0.1:8080/
// http://127.0.0.1:8080/users
// http://127.0.0.1:8080/users/id

app.use(bodyParser.json());
// npm i -g nodemon

let users = [
  { id: 1, name: "aaa", city: "pune", mobile: "11111" },
  { id: 2, name: "bbb", city: "mumbai", mobile: "222" },
  { id: 3, name: "ccc", city: "pune", mobile: "3333" },
  { id: 4, name: "ddd", city: "mumbai", mobile: "4444" },
  { id: 5, name: "eee", city: "pune", mobile: "55555" },
];

// http://localhost:8080/
app.get("/", (req, res) => {
  res.status(200).send("Welcome to express server");
});

// http://127.0.0.1:8080/users

app.get("/users", (req, res) => {
  res.status(200).send(users);
});

// http://127.0.0.1:8080/users/id
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id == id);
  res.status(200).send(user);
});

app.post("/users", (req, res) => {
  users.push(req.body);
  res.status(200).send("User Added");
});

// updations
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const index = users.findIndex((u) => u.id == id);
  const user = { ...users[index], ...data };
  users.splice(index, 1, user);
  res.status(200).send("User updated...");
});

// deletions
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const arr = users.filter((u) => u.id != id);
  users = arr;
  res.status(200).send("User deleted");
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
