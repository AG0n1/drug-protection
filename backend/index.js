const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json(users);
});

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

  console.log(user)
  if (user) {
    res.json({ user });
  } else {
    res.json({ user: null });
  }
});

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: 'mmarkovec15072003@gmail.com',
//     pass: '8Puvjgppy'
//   }
// })

app.get('/employee', (req, res) => {
  res.json(employee);
});

const employee = {
  8472: {
    name: "Helen",
    second_name: "Junior",
    status: "psycologist",
    phone_number: "+375283774837",
    email: "helenjunior@gmail.com"
  },

  3832: {
    name: "Matthew",
    second_name: "Markovets",
    status: "admin",
    phone_number: "+3752923883088",
    email: "matveymarkovets@gmail.com"
  },

  4324: {
    name: "Kirill",
    second_name: "Mushits",
    status: "customer servise",
    phone_number: "+375283774837",
    email: "kirillmushits@gmail.com"
  }
}

app.post('/employee', (req,res) => {
  const id = req.body;
  const isEmployee = Object.values(employee).find((u) => u === id)
  if (isEmployee) {
    res.json({
      name: employee.id.name,
      second_name: employee.id.second_name
    })
  } else {
    res.json({employee: null})
  }
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});