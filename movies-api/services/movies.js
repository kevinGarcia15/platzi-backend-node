const MongoLib = require('../lib/mongo')

class MoviesServices {
  constructor() {
    this.collection = 'movies'
    this.mongodb = new MongoLib()
  }

  async getMovies({tags}){
    const query = tags && {tags:{$in: tags}}//sintaxis que recibe mongo
    const movies = await this.mongodb.getAll(this.collection, query)//query son los tags, filtrar peliculas por tags
    return movies || []
  }

  async getMovie({movieId}){
    const movie = await this.mongodb.get(this.collection, movieId)
    return movie || []
  }

  async createMovie({movie}){
    const createMovieId = await this.mongodb.create(this.collection, movie)
    return createMovieId
  }

  async updateMovie({movieId, movie} = {}){
    const updatedMovieId = await this.mongodb.update(this.collection, movieId, movie)
    return updatedMovieId
  }

  async deleteMovie({movieId}){
    const deleteMovieId = await this.mongodb.delete(this.collection, movieId)
    return deleteMovieId
  }

  async remplaceMovie(){
    const remplaceMovieId = await Promise.resolve(moviesMock[0].id)
    return remplaceMovieId
  }
}

module.exports = MoviesServices
