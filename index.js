//set up express
const express = require('express')
const app = express()
const PORT = 3000
const db = require('./db/data.js')

//root path
app.get('/', (req, res) => {
    res.send('Welcome to our schedule website')
})
//users details
app.get('/users', (req, res) => {
    res.json(db.users)
})
//user details (specific index)
app.get('/users/:usersParams', (req, res) => {
    console.log(req.params.usersParams)
    res.send(db.users[req.params.usersParams])
})
//user details (specific index) and schedule details
app.get('/users/:usersParams/schedules', (req, res) => {
    console.log(req.params.usersParams)
    res.send(db.schedules[req.params.usersParams])
})
//schedules path
app.get('/schedules', (req, res) => {
    res.json(db.schedules)
})

//set up server
app.listen(PORT, () => {
    console.log(`server is listening on localhost:${PORT}!\n`)
}) 