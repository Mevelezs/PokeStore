const express = require('express');
const pokeRouter = require('./pokeRouts/pokeRouts');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.get('/', (req, res) => {
    res.send('funcionando');
  });
  router.use('/pokemons', pokeRouter);
}

module.exports = routerApi;
