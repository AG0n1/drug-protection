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

app.post('/telegramCheckUser', (req, res) => {
    console.log(111)
    /*
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
    */
    res.json({user: "name"})
  })