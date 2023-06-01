const express = require('express');
const pokeRouter = require('./pokeRouts/pokeRouts');
const exampleRouter = require('./pokeRouts/exampleRouts');

const Pokemons = require('../services/pokemonsServices');

const service = new Pokemons();

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.get('/', async (req, res) => {
    await service.generate();
    res.send('Pokemons added');
  });
  router.use('/pokemons', pokeRouter);
  router.use('/example', exampleRouter);
}

module.exports = routerApi;
