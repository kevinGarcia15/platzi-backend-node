require('dotenv').config();

function cacheResponse(res, seconds) {
  //verifica que si esta en modo desarrollo
  if (!process.env.NODE_ENV) {
    res.set('Cache-Control', `public, max-age=${seconds}`);
  }
}

module.exports = cacheResponse;
