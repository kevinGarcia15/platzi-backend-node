const { config } = require('../../config');
const boom = require('@hapi/boom')

function withErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack }; //spit opartor son esos tres puntos (...)
  }
}

function logError(err, req, res, next) {
  console.log(err);
  next(err);
}
function wrapError(err,req,res,next){//a veces los errores no vienen como boom error y es por eso que hay que transformarlos
  if (!err.isBoom) {
    next(boom.badImplementation(err))
  }
  next(err)
}

function handlerError(err, req, res, next) {
  //payload = carga util traducido al ingles
  const { output:{statusCode, payload}} = err
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logError,
  wrapError,
  handlerError
};
