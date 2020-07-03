const express = require('express')
const MoviesServices =require('../services/movies')

function moviesApi(app){
  const router = express.Router()
  app.use("/api/movies", router)
  const moviesServices = new MoviesServices()//se traen todos los metodos del servicio

  router.get("/", async function(req, res, next){
    const {tags} = req.query
    try {
      const movies = await moviesServices.getMovies({tags})
      throw new Error('Error Getting movies')
      res.status(200).json({
        data: movies,
        message: 'muvies listed'
      })
    } catch (err) {
      next(err)
    }
  })

  router.get("/:movieId", async function(req, res, next){
     const {movieId} = req.params
    try {
      const movies = await moviesServices.getMovie({movieId})

      res.status(200).json({
        data: movies,
        message: 'muvie retrived'//recuperar
      })
    } catch (err) {
      next(err)
    }
  })

  router.post("/", async function(req, res, next){
    const {body: movie} = req //esto viene del cuerpo
    try {
      const createMovieId = await moviesServices.createMovie({movie})

      res.status(201).json({//el status cuando se crea un nuevo elemento es 201
        data: createMovieId,
        message: 'muvie created'
      })
    } catch (err) {
      next(err)
    }
  })

  router.put("/:movieId", async function(req, res, next){
    const {body: movie} = req //esto viene del cuerpo
    const {movieId} = req.params

    try {
      const updateMovieId = await moviesServices.updateMovie({movieId, movie})

      res.status(200).json({
        data: updateMovieId,
        message: 'muvie updated'
      })
    } catch (err) {
      next(err)
    }
  })

  router.delete("/:movieId", async function(req, res, next){
    const {movieId} = req.params

    try {
      const deleteMovieId = await moviesServices.deleteMovie({movieId})

      res.status(200).json({
        data: deleteMovieId,
        message: 'muvie deleted'
      })
    } catch (err) {
      next(err)
    }
  })

  router.patch("/:movieId", async function(req, res, next){
    const {movieId} = req.params
    const {body: movie} = req //esto viene del cuerpo

    try {
      const remplaceMovieId = await moviesServices.remplaceMovie({movieId, movie})

      res.status(200).json({
        data: remplaceMovieId,
        message: 'muvie remplaced'
      })
    } catch (err) {
      next(err)
    }
  })

}

module.exports = moviesApi
