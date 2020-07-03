const express = require('express')
const {moviesMock} = require('../utils/mocks/movies')

function moviesApi(app){
  const router = express.Router()
  app.use("/api/movies", router)

  router.get("/", async function(req, res, next){
    try {
      const movies = await Promise.resolve(moviesMock)

      res.status(200).json({
        data: movies,
        message: 'muvies listed'
      })
    } catch (err) {
      next(err)
    }
  })

  router.get("/:movieId", async function(req, res, next){
    try {
      const movies = await Promise.resolve(moviesMock[0])

      res.status(200).json({
        data: movies,
        message: 'muvie retrived'//recuperar
      })
    } catch (err) {
      next(err)
    }
  })

  router.post("/", async function(req, res, next){
    try {
      const createMovieId = await Promise.resolve(moviesMock[0].id)

      res.status(201).json({//el status cuando se crea un nuevo elemento es 201
        data: createMovieId,
        message: 'muvie created'
      })
    } catch (err) {
      next(err)
    }
  })

  router.put("/:movieId", async function(req, res, next){
    try {
      const updateMovieId = await Promise.resolve(moviesMock[0].id)

      res.status(200).json({
        data: updateMovieId,
        message: 'muvie updated'
      })
    } catch (err) {
      next(err)
    }
  })

  router.delete("/:movieId", async function(req, res, next){
    try {
      const deleteMovieId = await Promise.resolve(moviesMock[0].id)

      res.status(200).json({
        data: deleteMovieId,
        message: 'muvie deleted'
      })
    } catch (err) {
      next(err)
    }
  })

}

module.exports = moviesApi
