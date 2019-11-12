require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const session = require("express-session");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send('server running')
})

// server.post('/api/register', (req, res) => {
//   const {username, password} = req.body
//   const newUser = {
//     username,
//     password,
//   }

// })

const port = process.env.PORT || 4300;

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
