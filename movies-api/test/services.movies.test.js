const assert = require('assert')
const proxyquire = require('proxyquire')

const {MongoLibMock, getAllstub} = require('../utils/mocks/mongoLib.js')
const {moviesMock} = require('../utils/mocks/movies.js')

describe("services - movies", function(){
  const MoviesServices = proxyquire('../services/movies',{
    '../lib/mongo': MongoLibMock
  })

  const moviesServices = new MoviesServices()

  describe("when getMovies method is called", async function(){
    it('should call the getall MongoLib method', async function(){
      await moviesServices.getMovies({})
      assert.strictEqual(getAllstub.called, true)
    })
//verificar que los datos sean fiables
    it('should return an array of movies', async function(){
      const result = await moviesServices.getMovies({})
      const expected = moviesMock
      //igualdad profunda porque tiene varios niveles
      assert.deepEqual(result, expected)
    })
  })
})
