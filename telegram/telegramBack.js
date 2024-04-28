const express = require('express')
const cors = require('cors')
const mysql = require('mysql');
const app = express() 
app.use(cors())

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

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

app.get('/telegramCheckUser', (req,res) => {
  res.json({status: "server is working on port 3002"})
})

app.post('/telegramCheckUser', (req, res) => {
    console.log("-------", req)
    connection.query('SELECT * FROM users ')
    res.json({user: "name"})
})