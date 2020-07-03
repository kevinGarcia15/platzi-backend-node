/*Crear un servidor en express*/
const express = require('express')
const app = express()

const {config} = require('./config/index')
const moviesApi = require('./routes/movies.js')

const {logError, handlerError} = require('./utils/middleware/errorHandlers.js')
//middleware body parser
app.use(express.json())//para que nuestara ruta sepa interpretar datos json
//ejecutar y pasarle nuestra applicacion de express
moviesApi(app)
//middlewares de error
app.use(logError)
app.use(handlerError)
//correr servidor
app.listen(config.port , function(){
  console.log(`Listening on http://localhost:${config.port}`)
})
