import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`);
  console.log(`Server is running on PORT ${PORT}`);
});

// API Routes starts here

const users = [
  { id: 1, name: "shubham", age: 99, gender: "male" },
  { id: 2, name: "Vedant", age: 29, gender: "male" },
  { id: 3, name: "Akansha", age: 39, gender: "female" },
  { id: 4, name: "Anushka", age: 39, gender: "female" },
  { id: 5, name: "Mrugmai", age: 39, gender: "female" },
];

app.get("/", (request, response) => {
  response.send("<h1 style='text:center'> Yo hoo it's working! </h1>");
});

// app.get("/api/users", (request, response) => {
//   response.send([
//     { id: 1, name: "shubham", age: 99 },
//     { id: 2, name: "Vedant", age: 29 },
//     { id: 3, name: "Akash", age: 39 },
//   ]);
// });

app.get("/api/users/:id", (request, response) => {
  const userId = Number(request.params.id);

  const user = users.find((user) => {
    if (user.id === userId) return true;

    return false;
  });

  if (!user) response.send("Does not exist!");

  response.send(`User Found: ${user.name}`);
});

app.get("/api/users", (request, response) => {
  const { gender, age } = request.query;

  let filteredUsers = [];

  if (!age) {
    filteredUsers = users.filter((user) => user.gender == gender);
  } else {
    filteredUsers = users.filter(
      (user) => user.gender == gender && user.age >= 18
    );
  }

  response.send(filteredUsers);
});
