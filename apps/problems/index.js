const express = require("express")
require("dotenv").config();
const PORT = process.env.PORT || 5001

const app = express()

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.send("@KodChallenge/Problems server is running")
})

app.listen(PORT, () => {
  console.log(`@KodChallenge/Problems server listening on port ${PORT}`)
})