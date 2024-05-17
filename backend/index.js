const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const fs = require("fs")
const path = require("path")

const app = express();

app.use(cors());
app.use(bodyParser.json());

const messagesDir = path.join(__dirname, 'forum');
const storiesFilePath = path.join(__dirname, 'stories', 'stories.txt');

function generateToken() {
  const symbols = '1234567890abcdefghijklmnopqrstuvwxyz';
  let token = '';
  for (let i = 0; i < 16; i++) {
    token += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return token;
}

app.post('/getStoriesInfo', (req, res) => {
  fs.readFile(storiesFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).json({data: 'Произошла ошибка при чтении данных.'});
      return;
    }

    try {
      const parsedData = JSON.parse(data);
      res.json(parsedData);
    } catch (parseError) {
      console.error('Ошибка парсинга данных:', parseError);
      res.status(500).json({data: 'Произошла ошибка при парсинге данных.'});
    }
  });
});

app.post('/getMessages', (req, res) => {
  let {id} = req.body
  
  const filePath = path.join(messagesDir, `${id}.txt`);
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).json({ error: 'Error writing message to file' });
    } else {
      res.json(data)
    }
  });
})

if (!fs.existsSync(messagesDir)) {
  fs.mkdirSync(messagesDir);
}

app.post('/saveMessage', (req, res) => {
  const { message, date, time, name, second_name, id } = req.body;

  if (message.trim().length === 0) {
    return
  } 

  const dataToWrite = 
`"${time}": {
  "name": "${name}", 
  "second_name": "${second_name}", 
  "date": "${date}", 
  "message": "${message}"
},\n`;

  const filePath = path.join(messagesDir, `${id}.txt`);
  console.log(filePath)
  
  fs.appendFile(filePath, dataToWrite, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).json({ error: 'Error writing message to file' });
    }
    console.log('Message saved to file:', dataToWrite);
    res.json({ message: 'Message saved successfully' });
  });
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mmark',
  password: 'LQ8G/WoJJd_EsC9v',
  database: 'users'
});

connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } else {
    console.log('Подключение к базе данных успешно');
  }
});

const secretKey = 'your_secret_key';

app.post('/signIn', (req, res) => {
  const { email, password } = req.body;
  connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results) => {
    console.log(results);
    if (error) {
      console.error('Error in trying to connect to database:', error);
      res.status(500).json({ error: 'Error in fetching' });
    } else {
      if (results.length > 0) {
        const token = jwt.sign({ email: results[0].email, userId: results[0].id }, secretKey, { expiresIn: '10h' });
        activeUsers[token] = {
          expiresIn: '10h',
          isActive: true,
        };
        res.json({ user: results[0], token: token });
      } else {
        console.log('Пользователь не найден');
        res.json({ user: null });
      }
    }
  });
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.log('Error in trying to connect to database: ', err);
      res.status(500).json({ error: 'Error in fetching' });
    } else {
      if (results.length > 0) {
        res.json({ user: true });
      } else {
        connection.query('INSERT INTO `users`(`email`, `password`) VALUES (?, ?)', [email, password], (error, result) => {
          if (error) {
            console.error('Error in inserting user:', error);
            res.status(500).json({ error: 'Error in inserting user' });
          } else {
            console.log('User successfully created');
            const token = jwt.sign({ email: email, userId: result.insertId }, secretKey, { expiresIn: '10h' });
            activeUsers[token] = {
              expiresIn: '10h',
              isActive: true,
            };
            res.json({ user: { email: email, id: result.insertId }, token: token });
          }
        });
      }
    }
  });
});

app.post('/logout', (req, res) => {
  let { token } = req.body;
  delete activeUsers[token];
  console.log(activeUsers);
  res.json({ message: 'Logged out successfully' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
