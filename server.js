const express = require('express');
const dotenv = require('dotenv')
const app = express();

dotenv.config()

app.get("", (req, res) => {
    console.log("hello there")
    res.json({
        message: "This is a get request"
    })
})

app.post("", (req, res) => {
    console.log("hello there")
    res.json({
        message: "This is a post request"
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}`)
})