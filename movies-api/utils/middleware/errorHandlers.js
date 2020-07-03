const {config} = require ('../../config')

function withErrorStack(error, stack){
  if (config.dev) {
    return{error, stack}
  }
}

function logError(err, req, res, next){
  console.log(err)
  next(err)
}
function handlerError(err, req, res, next){
  res.status(err.status || 500)
  res.json(withErrorStack(err.message, err.stack))
}

module.exports = {
  logError,
  handlerError
}
