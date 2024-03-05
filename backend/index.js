const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(cors())

class User {
  constructor(name, second_name, status, role) {
    this.name = name
    this.status = status
    this.second_name = second_name
    this.role = role
  }
}

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: "mmark",
  password: "LQ8G/WoJJd_EsC9v",
  database: 'users'
});

connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } else {
    console.log('Подключение к базе данных успешно');
  }
});

app.post('/api', (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results) => {
    if (error) {
      console.error('Error in trying to connect to database:', error);
      res.status(500).json({ error: 'Error in fetching' });
    } else {
      if (results.length > 0) {
        console.log('Пользователь найден');
        res.json({ user: results[0] });
      } else {
        console.log('Пользователь не найден');
        res.json({ user: null });
      }
    }
  });

  connection.query('SELECT * FROM ')
});