const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const messagesDir = path.join(__dirname, 'forum');
const storiesFilePath = path.join(__dirname, 'stories', 'stories.txt');

if (!fs.existsSync(messagesDir)) {
  fs.mkdirSync(messagesDir);
}

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
let activeUsers = {};

const generateToken = () => {
  const symbols = '1234567890abcdefghijklmnopqrstuvwxyz';
  return Array.from({ length: 16 }, () => symbols[Math.floor(Math.random() * symbols.length)]).join('');
};

// Controllers
const userSupportRequests = async (req, res) => {
  const { message, name, second_name, telegram_name } = req.body;

  try {
    const [result] = await connection.query("SELECT * FROM usersSupport");
    res.json(result);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error fetching user support requests");
  }
};

const getStoriesInfo = async (req, res) => {
  const { id } = req.body;
  const filePath = path.join(storiesFilePath, `${id}.txt`);

  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    console.error('Error reading file:', err);
    res.status(500).json({ data: 'Error reading data.' });
  }
};

const getMessages = async (req, res) => {
  const { id } = req.body;
  const filePath = path.join(messagesDir, `${id}.txt`);

  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    res.json(data);
  } catch (err) {
    console.error('Error reading file:', err);
    res.status(500).json({ error: 'Error reading message from file' });
  }
};

const getSearchData = async (req, res) => {
  const { value } = req.body;
  const searchDir = path.join('backend', 'search', 'result.txt');

  try {
    const data = await fs.promises.readFile(searchDir, 'utf8');
    const parsedData = JSON.parse(data);
    let foundText = '';
    let title = '';

    for (let key in parsedData) {
      if (key.toLowerCase().includes(value.toLowerCase())) {
        foundText = parsedData[key];
        title = key;
        break;
      }
    }

    if (!foundText) {
      for (let key in parsedData) {
        if (parsedData[key].content.toLowerCase().includes(value.toLowerCase())) {
          foundText = parsedData[key].content;
          title = key;
          break;
        }
      }
    }

    res.status(200).json(foundText ? { foundText, title } : { title: null });
  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).json({ error: 'Error processing data' });
  }
};

const saveMessage = async (req, res) => {
  const { message, date, time, name, second_name, id, status } = req.body;

  if (!message.trim()) {
    return res.status(400).json({ error: 'Message cannot be empty' });
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

  try {
    await fs.promises.appendFile(filePath, dataToWrite, 'utf8');
    res.json({ message: 'Message saved successfully' });
  } catch (err) {
    console.error('Error writing to file:', err);
    res.status(500).json({ error: 'Error writing message to file' });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [results] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
    if (results.length > 0) {
      const user = results[0];
      if (user.password === password) {
        const token = jwt.sign({ email: user.email, userId: user.id }, secretKey, { expiresIn: '10h' });
        activeUsers[token] = { expiresIn: '10h', isActive: true };
        res.json({ user, token });
      } else {
        res.json({ user: "Wrong password" });
      }
    } else {
      res.json({ user: null });
    }
  } catch (error) {
    console.error('Error in fetching user:', error);
    res.status(500).json({ error: 'Error in fetching' });
  }
};

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [results] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
    if (results.length > 0) {
      res.json({ user: true });
    } else {
      const [result] = await connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password]);
      const token = jwt.sign({ email, userId: result.insertId }, secretKey, { expiresIn: '10h' });
      activeUsers[token] = { expiresIn: '10h', isActive: true };
      res.json({ user: { email, id: result.insertId }, token });
    }
  } catch (error) {
    console.error('Error in registering user:', error);
    res.status(500).json({ error: 'Error in inserting user' });
  }
};

const saveData = async (req, res) => {
  const { body } = req;
  const { email } = body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const fields = Object.keys(body).filter(key => key !== 'email');
  if (fields.length === 0) {
    return res.status(400).json({ error: 'No fields to update' });
  }

  const values = fields.map(field => body[field]);
  const setClause = fields.map(field => `${field} = ?`).join(', ');

  const query = `UPDATE users SET ${setClause} WHERE email = ?`;
  values.push(email);

  try {
    const [results] = await connection.query(query, values);
    if (results.affectedRows === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json({ message: 'Data updated successfully' });
    }
  } catch (error) {
    console.error('Error in updating user:', error);
    res.status(500).json({ error: 'Error in updating' });
  }
};

const getUsersData = async (req, res) => {
  const query = "SELECT name, second_name, status FROM users WHERE status IN ('user')";

  try {
    const [results] = await connection.query(query);
    res.json(results.map(row => ({ name: row.name, second_name: row.second_name, status: row.status })));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCustomersData = async (req, res) => {
  const query = "SELECT name, second_name, status FROM users WHERE status IN ('customer', 'tech', 'admin')";

  try {
    const [results] = await connection.query(query);
    res.json(results.map(row => ({ name: row.name, second_name: row.second_name, status: row.status })));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logout = (req, res) => {
  const { token } = req.body;
  delete activeUsers[token];
  res.json({ message: 'Logged out successfully' });
};

// Routes
app.post('/userSupportRequests', userSupportRequests);
app.post('/getStoriesInfo', getStoriesInfo);
app.post('/getMessages', getMessages);
app.post('/getSearchData', getSearchData);
app.post('/saveMessage', saveMessage);
app.post('/signIn', signIn);
app.post('/register', register);
app.post('/saveData', saveData);
app.post('/getUsersData', getUsersData);
app.post('/getCustomersData', getCustomersData);
app.post('/logout', logout);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});