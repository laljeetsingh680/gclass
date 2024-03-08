require('dotenv').config()

const express = require('express');
const app = express();
let port = 3000;

app.get('/', (req,res) => {
    res.send("Hi this is jacob")
})


app.listen(process.env.PORT, () => {
    console.log(`server is successfully running on ${process.env.PORT}`)
})