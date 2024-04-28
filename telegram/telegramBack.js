const express = require('express')
const cors = require('cors')
const app = express() 
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

app.get('/telegramCheckUser', (req,res) => {
  res.json({name: "random"})
})

app.post('/telegramCheckUser', (req, res) => {
    res.json({user: "name"})
})