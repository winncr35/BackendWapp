import express from 'express';
import apiRoutes from './routers/api';
import cors from 'cors';

// const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8082



app.use(cors());


//config body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//config static file: images/css/js

app.use(express.static('public'))
//config router
apiRoutes(app)



app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
