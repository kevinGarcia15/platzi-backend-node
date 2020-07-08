const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies.js');
const testServer = require('../utils/testServer');

describe('routes - movies', function () {
  const route = proxyquire('../routes/movies', {
    '../services/movies': MoviesServiceMock, //intercambia nuestra ruta original por movies mock
  });

  const request = testServer(route);
  describe('GET /movies', function () {
    it('should respond with status 200', function (done) {
      request.get('/api/movies').expect(200, done);
    });

    it('should respond with list of movies', function (done) {
      request.get('/api/movies').end((err, res) => {
        //compara los datos que trajo del servidor, con los datos que están  en el servidor
        assert.deepEqual(res.body, {
          data: moviesMock,
          message: 'muvies listed'
        });

        done()
      });
    });
  });
});
