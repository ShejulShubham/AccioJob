const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

let users = [
  { id: 1, name: "shubham", age: 99, gender: "male" },
  { id: 2, name: "Vedant", age: 29, gender: "male" },
  { id: 3, name: "Akansha", age: 39, gender: "female" },
  { id: 4, name: "Anushka", age: 49, gender: "female" },
  { id: 5, name: "Mrughmai", age: 59, gender: "female" },
];

// Middlewares
app.use(express.json());
app.use(logMiddleware);

function logMiddleware(request, response, next) {
  console.log("Method: ", request.method);
  console.log("URL: ", request.url);

  next();
}

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});

app.get("/", (request, response) => {
  response.send(users);
});

app.post("/", (request, response) => {
  const { name, age, gender } = request.body;

  const newUser = {
    id: users.length + 1,
    name: name,
    age: age,
    gender: gender,
  };

  users.push(newUser);
  response.send("user saved");
});

app.put("/users/:id", (request, response) => {
  const { body, params } = request;

  const parseId = Number(params.id);

  const findUserIndex = users.findIndex((user) => user.id === parseId);

  if (findUserIndex === -1) {
    return response.status(404).send("Id does not exist!");
  }

  users[findUserIndex] = { id: parseId, ...body };

  return response.status(200).send(users);
});

app.patch("/users/:id", (request, response) => {
  const { body, params } = request;

  const parseId = Number(params.id);

  const existingUser = users.find((user) => user.id === parseId);

  if (!existingUser) return response.status(404).send("User does not exist!");

  const updatedUser = { ...existingUser, ...body };

  users[parseId - 1] = updatedUser;

  return response.status(200).send(users);
});

app.delete("/users/:id", (request, response) => {
  const { params } = request;

  const parseId = Number(params.id);

  const userIndex = users.findIndex((user) => user.id === parseId);

  if (userIndex === -1)
    return response.status(404).send("User does not exist!");

  users = users.filter((user) => user.id !== parseId);

  return response.status(200).send(users);
});
