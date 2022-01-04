'use strict'
const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors')


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(cors())
const api = require('./apis/index')

app.use('/api', api.AUTH)
app.use('/api', api.LIBRO)
app.use('/api', api.DETALLE)
app.use('/api', api.CATEGORIA)

const port = process.env.PORT || 3000


app.listen(port, ()=>{console.log(`listen to ${port}`)})
