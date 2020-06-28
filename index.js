const express = require("express");
const { request } = require("express");

const app = express();

app.get("/test", (request, response) => response.send("test"));

const users = [
  {
    hours: 10,
    website: "cnn.com",
    name: "david",
  },

  {
    name: "rein",
    website: "nos.nl",
    hours: 8,
  },
  {
    name: "lisa",
    website: "codaisseur.com",
    hours: 4,
  },
];

app.get('/', (request, response) => response.send(users))

app.get('/user/:username',
(request, response) => {
    const user = users
    //arrow function, no braquest becouse is one line, dont have to write the return, it returns by default
    .find(user => user.name === request.params.username )
    response.send(user)
})




const port = 4000;

app.listen(port, () => console.log(`Listening now on port :${port}`));
