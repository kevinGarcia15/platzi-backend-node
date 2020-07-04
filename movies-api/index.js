/*Crear un servidor en express*/
const express = require('express')
const app = express()

const {config} = require('./config/index')
const moviesApi = require('./routes/movies.js')

const {logError,
       wrapError,
       handlerError} = require('./utils/middleware/errorHandlers.js')
const notFoundHandler = require('./utils/middleware/notFoundHandler.js')
//middleware body parser
app.use(express.json())//para que nuestara ruta sepa interpretar datos json
//ejecutar y pasarle nuestra applicacion de express
moviesApi(app)
//manejador 404 not found
app.use(notFoundHandler)
//middlewares de error
app.use(logError)
app.use(wrapError)
app.use(handlerError)
//correr servidor
app.listen(config.port , function(){
  console.log(`Listening on http://localhost:${config.port}`)
})
