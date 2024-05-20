const express = require('express')
const cors = require('cors')
const multer = require('multer');
const upload = multer(); 
const mysql = require('mysql');
const app = express() 

app.use(cors())
app.use(upload.any());

/* Create Connection */
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
  console.log("FormData:", req.body.telegram_id);
  
  connection.query(`SELECT * FROM users WHERE telegram_id = ${req.body.telegram_id}`, [], (err, result) => {
    if (result.length !== 0) {
      res.json({
        user: true,
        name: result[0].name,
        second_name: result[0].second_name,
      })
    } else {
      res.json({user: null})
    }
})
  
  
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});