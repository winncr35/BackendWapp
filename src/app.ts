import express from 'express';
import webRoutes from './routers/web';
// const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8080

//config router
webRoutes(app)

//config static file: images/css/js

app.use(express.static('public'))

//config body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
