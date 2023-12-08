const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})

app.get('/api', (req, res) => {
    res.json({
      AG0n1: {
        status: "admin",
        email: "mmarkovec15072003@gmail.com",
        password: "8Puvjgppy",
        phoneNumber: "+375293883088"
      },
      Teacher: {
        status: "admin",
        test: "test"
      }
    });
  });
  