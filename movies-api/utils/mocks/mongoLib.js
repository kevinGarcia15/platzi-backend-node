const sinon = require('sinon')
const { moviesMock, filterMoviesMock}= require('./movies')

const getAllstub = sinon.stub()//es requiere sinon.stub()
getAllstub.withArgs('movies').resolves(moviesMock)

const tagQuery = {tags: {$in: ['Drama']}}
getAllstub.withArgs('movies',tagQuery).resolves(filterMoviesMock('Drama'))

const createStub = sinon.stub().resolves(moviesMock[0].id)

class MongoLibMock {
  getAll(collection, query) {
    return getAllstub(collection, query)
  }

  create(collection, data){
    return createStub(collection, data)
  }
}

module.exports = {
  getAllstub,
  createStub,
  MongoLibMock}
