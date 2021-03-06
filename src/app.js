var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const mongoose = require('mongoose')
const helmet = require('helmet')

main().catch(err => console.log(err))

async function main () {
  await mongoose.connect('mongodb://localhost:27017/graftree')
}

var app = express()

app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '..', 'dist')))

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
})

module.exports = app
