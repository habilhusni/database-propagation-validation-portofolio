const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = 3000 || process.env.PORT

const app = express()

/* GET ROUTES */
const index = require('./routes/index')

/* APP SETUP */
let dbconfig = {
  development: 'mongodb://localhost/validateDataBase',
  test: 'mongodb://localhost/validateDataBase_test'
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

/* MONGOOSE CONNECT */
mongoose.Promise = global.Promise
mongoose.connect(dbconfig[app.settings.env], (err)=> {
  err ? console.log(err) : console.log(`connected to ${app.settings.env} database`)
})

/* ROUTES CONNECT */
app.use('/api', index)

/* SERVER PORT */
app.listen(port, ()=> {
  console.log(`listening to ${port}`)
})
