const express = require('express')
const Router = require('./route')
const connect = require('./database')

const app = express()
app.use(express.json())
app.use(Router)
app.get('/', (req, res) => {
    res.send("hello")
})

app.listen(1433, async () => {
    console.log("server running....")
    await connect()
})