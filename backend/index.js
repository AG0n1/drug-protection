const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const fs = require("fs")
const path = require("path")
let activeUsers = {}
const app = express();

app.use(cors());
app.use(bodyParser.json());

const messagesDir = path.join(__dirname, 'forum');
const searchDir = path.join(__dirname, "search")
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
  let {id} = req.body
  fs.readFile(storiesFilePath + {id} + ".txt", 'utf8', (err, data) => {
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

const fs = require('fs');
const path = require('path');

app.post("/getSearchData", (req, res) => {
  let { value } = req.body;
  const searchDir = 'путь_к_файлу/result.txt'; // Замените 'путь_к_файлу' на реальный путь к файлу

  fs.readFile(searchDir, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Ошибка чтения файла' });
    }

    try {
      const parsedData = JSON.parse(data);
      let foundText = '';

      for (let key in parsedData) {
        if (key.toLowerCase().includes(value.toLowerCase())) {
          foundText = parsedData[key];
          break;
        }
      }

      if (!foundText) {
        for (let key in parsedData) {
          if (parsedData[key].title.toLowerCase().includes(value.toLowerCase())) {
            foundText = parsedData[key].title;
            break;
          }
        }
      }

      if (foundText) {
        res.status(200).json({ foundText });
      } else {
        res.status(404).json({ message: `Текст "${value}" не найден` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка при обработке данных' });
    }
  });
});


if (!fs.existsSync(messagesDir)) {
  fs.mkdirSync(messagesDir);
}

app.post('/saveMessage', (req, res) => {
  const { message, date, time, name, second_name, id, status } = req.body;

  if (message.trim().length === 0) {
    return
  } 

  const dataToWrite = 
`"${time}": {
  "name": "${name}", 
  "second_name": "${second_name}", 
  "date": "${date}", 
  "message": "${message}",
  "status": "${status}"
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

  connection.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
    if (error) {
      console.error('Error in trying to connect to database:', error);
      res.status(500).json({ error: 'Error in fetching' });
    } else {
      if (results.length > 0) {
        const user = results[0];

        if (user.password === password) {
          const token = jwt.sign({ email: user.email, userId: user.id }, secretKey, { expiresIn: '10h' });
          activeUsers[token] = {
            expiresIn: '10h',
            isActive: true,
          };
          res.json({ user: user, token: token });
        } else {
          res.json({ user: "Wrong password" });
        }
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

app.post("/saveData", (req, res) => {
  const { body } = req;
  const { email } = body;

  console.log('Request body:', body);

  if (!email) {
    console.log('Nickname is required');
    return res.status(400).json({ error: 'Nickname is required' });
  }

  const fields = Object.keys(body).filter(key => key !== 'email');
  const values = fields.map(field => body[field]);

  if (fields.length === 0) {
    console.log('No fields to update');
    return res.status(400).json({ error: 'No fields to update' });
  }

  const setClause = fields.map(field => `${field} = ?`).join(', ');

  const query = `UPDATE users SET ${setClause} WHERE email = ?`;
  values.push(email);

  console.log('Executing query:', query, 'with values:', values);

  connection.query(query, values, (err, results) => {
    if (err) {
      console.log('Error in trying to connect to database: ', err);
      return res.status(500).json({ error: 'Error in updating' });
    }

    if (results.affectedRows === 0) {
      console.log('User not found');
      return res.status(404).json({ error: 'User not found' });
    }

    console.log('Data updated successfully');
    res.status(200).json({ message: 'Data updated successfully' });
  });
});

app.post("/getUsersData", (req, res) => {
  const query = `
    SELECT name, second_name, status 
    FROM users 
    WHERE status IN ('user')
  `;

  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }

    const response = results.map(row => ({
      name: row.name,
      second_name: row.second_name,
      status: row.status
    }));

    res.json(response);
  });
})

app.post("/getUserAppointmentsData", (req,res) => {
  
})

app.post("/getCustomersData", (req, res) => {
  const query = `
    SELECT name, second_name, status 
    FROM users 
    WHERE status IN ('customer', 'tech', 'admin')
  `;

  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }

    const response = results.map(row => ({
      name: row.name,
      second_name: row.second_name,
      status: row.status
    }));

    res.json(response);
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
