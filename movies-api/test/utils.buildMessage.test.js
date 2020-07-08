/*Assert verifica si el test es correcto o no*/
/*La idea del test es que enviemos un mensaje y el nos devuelva una respuesta*/
const assert = require('assert')
const buildMessage = require('../utils/buildMessage')

describe.only('utils - buildMessage', function(){//only nos sirve para que solo corra este suit de test
  describe('when recives an entity and an action', function(){
    it('should return the respective message', function(){
      const result = buildMessage('movie', 'create')
      const expect = 'movie created'
      assert.strictEqual(result, expect)
    })
  })

  describe('when recives an entity and an action is a list', function(){
    it('should return the respective message with the entity in plural', function(){
      const result = buildMessage('movie', 'list')
      const expected = 'movies listed'
      assert.strictEqual(result, expected)
    })
  })
})
