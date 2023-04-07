const express = require('express');
const app = express();
const port = 3000;

let dbUser = [
  {
    username:"user2",
    password:"123",
    name: "user",
    email:"zzul11@gmail.com"
  },
  {

    username: "jolliey",
    password: "111",
    name: "jul",
    email: "jul25"
  },
]

app.use(express.json());

app.post('/', (req, res) => {
  let data = req.body
  res.send(
    login(
      data.username,
      data.password
    )
  );
});

app.use(express.json());

app.post('/register', (req, res) => {
  let data = req.body
  res.send(
    register(
      data.username,
      data.password,
      data.name,
      data.email
      )
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function login (username, password){
  console.log("someone try to login with", username, password)

  let matched = dbUser.find(element =>
    element.username == username 
  )
  if(matched) {
    if (matched.password == password){
      return matched
    } else {
      return "password not matched"
    }
  }
  else {
    return "username not found"
  }

}

function register(
  newusername,
  newpassword,
  newname,
  newemail
) {

  dbUser.find(element => {
    console.log(element)
  })

  dbUser.push({
    username: newusername,
    password: newpassword,
    name: newname,
    email: newemail
  })

}

