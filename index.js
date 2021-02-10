//set up express
const express = require('express')
const app = express()
const PORT = 3000
const db = require('./db/data.js')

//Step 2 : Create the first routes to return all the information
//--root path
app.get('/', (req, res) => {
    res.send('Welcome to our schedule website')
})
//--users path
app.get('/users', (req, res) => {
    res.json(db.users)
})
//--schedules path
app.get('/schedules', (req, res) => {
    res.json(db.schedules)
})

//Step 3 : Create parameterized routes
//--user details (specific index)
app.get('/users/:usersParams', (req, res) => {
    //console.log(req.params.usersParams)
    res.send(db.users[req.params.usersParams])
})
//--user details (specific index) and schedule details
app.get('/users/:usersParams/schedules', (req, res) => {
    var obj = db.schedules
    var result = []
    for (let i=0; i<obj.length; i++) {
        if(db.schedules[i].user_id == req.params.usersParams) {
            console.log(db.schedules[i])
            result.push(db.schedules[i])
        }
    }
    res.send(result)
})

//Step 4 : Create routes to update data
    //example
    //queries
    //? = begining of query
    //key:value separated by the ""="" symbol
    //key:value pairs separated by the "&" symbol
    //ex. /hello?name=GooG&car=Toyota
    app.get('/hello', (req, res) => {
        console.log(req.query.name)
        if (req.query.name) {
            res.send(`hello back at you ${req.query.name}!`)
        } else {
            res.send('hello nameless')
        }
        
    })
//--add a new schedule

//--add a new user

//set up server
app.listen(PORT, () => {
    console.log(`server is listening on localhost:${PORT}!\n`)
}) 