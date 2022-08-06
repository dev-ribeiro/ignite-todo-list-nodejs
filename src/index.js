const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find(element => element.username == username);

  if (!user) { return response.status(400).json({ error: "User not found." }) };

  request.username = user;

  return next()
}

app.post('/users', (request, response) => {

  const { name, username } = request.body;

  const usernameAlreadyExist = users.some((user) => user.username == username);

  if (usernameAlreadyExist) { return response.status(400).json({ error: "Username already exists." }) }

  const createdUser = {
    id: uuidv4(),
    name,
    username,
    todos: []
  }

  users.push(createdUser)

  return response.status(201).json(createdUser)
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { username } = request;
  const { title, deadline } = request.body;

  const createdTodo = {
    id: uuidv4(),
    title: title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  };

  username.todos.push(createdTodo);

  return response.status(201).json(createdTodo);

});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;