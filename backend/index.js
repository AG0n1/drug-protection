const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = {
  AG0n1: {
    name: "AG0n1",
    status: "admin",
    email: "mmarkovec15072003@gmail.com",
    password: "111",
    phoneNumber: "+375293883088",
  },
  Teacher: {
    name: "Teacher",
    status: "admin",
    email: "admin",
    password: "test",
    phoneNumber: "+375293883088",
  },
  User: {
    name: "User",
    status: "user",
    test: "test",
  },
};

app.post('/api', (req, res) => {
  const { email, password } = req.body;
  const user = Object.values(users).find((u) => u.email === email && u.password === password);
  if (user) {
    res.json({ user });
  } else {
    res.json({ user: null });
  }
});


app.get('/api', (req, res) => {
  res.json(users);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
