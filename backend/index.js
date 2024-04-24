const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const secretKey = 'your_secret_key';

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(`token: ${token}`)

  if (!token) {
    return res.status(401).json({ message: 'Требуется токен авторизации' });
  }

  jwt.verify(token.split(' ')[1], secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Неверный токен авторизации' })
    }

    req.user = decoded;
    next();
  });
};

app.get('/api', (req, res) => {
  res.json(user)
})

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mmark',
  password: 'LQ8G/WoJJd_EsC9v',
  database: 'users'
})

connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } else {
    console.log('Подключение к базе данных успешно');
  }
});

app.post('/telegramCheckUser', (req, res) => {
  const { telegram_id } = req.body;
  connection.query(`SELECT * FROM users WHERE telegram_id = ${telegram_id}`, [telegram_id], (err, result) => {
    if (err) {
      console.log("Somethinng wrong with connection to database ")
    } else {
      if (result.length > 0) {
        res.json({name: name})
      } else {
        console.log("User not found")
        connection.query(`INSERT INTO \`users\`(\`id\`, \`name\`, \`second_name\`, \`email\`, \`password\`, \`status\`, \`telegram_name\`, \`telegram_id\`, \`donate_value\`) VALUES ('undefined','undefined','undefined','undefined','undefined','user','undefined',${telegram_id},0) `)
        res.json({user: null})
      }
    }
  })
})

app.post('/signIn', (req, res) => {
  const { email, password } = req.body;
  connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results) => {
    console.log(results)
    if (error) {
      console.error('Error in trying to connect to database:', error)
      res.status(500).json({ error: 'Error in fetching' });
    } else {
      if (results.length > 0) {
        const token = jwt.sign({ email: email }, secretKey, { expiresIn: '8h' });
        res.json({ user: results[0], token: token });
      } else {
        console.log('Пользователь не найден');
        res.json({ user: null });
      }
    }
  });
});

app.post('/register', (req,res) => {
  const { email, password } = req.body;

  connection.query('SELECT id FROM users WHERE id = ?', (err, result) => {
    if (!err) {
      if (result.length > 0) {
        console.log(result)
      }
    }
  })

  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) { 
      console.log("Error in trying to connect to database: ", err)
      res.status(500).json({error: 'Error in fetching'})
    } else {
      if (results.length > 0) {
        res.json({user: true})
      } else {
        connection.query(`INSERT INTO \`users\`(\`id\`, \`name\`, \`second_name\`, \`email\`, \`password\`, \`status\`, \`telegram_name\`, \`telegram_id\`, \`donate_value\`) VALUES (1,'[value-2]','[value-3]','${email}','${password}','[value-6]','[value-7]',11,1.1)`)
        console.log("User succesfully created")
      }
    }
  })
})

app.post('/secure-endpoint', verifyToken, (req, res) => {
  
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
