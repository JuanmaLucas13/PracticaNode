const pruebaMiddleware = (req, res, next) => {
  console.log('pasando por el middelware');

  next();
}


module.exports = {pruebaMiddleware};