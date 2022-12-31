const express = require('express');
const pokeRouter = require('./pokeRouts/pokeRouts');
const exampleRouter = require('./pokeRouts/exampleRouts');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.get('/', (req, res) => {
    res.send('funcionando');
  });
  router.use('/pokemons', pokeRouter);
  router.use('/example', exampleRouter);
}

module.exports = routerApi;
