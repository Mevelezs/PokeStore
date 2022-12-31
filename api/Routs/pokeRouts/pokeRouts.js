const { Router } = require('express');
const Pokemon = require('../../services/pokemonsServices');

const router = Router();

const service = new Pokemon();

router.get('/', async (req, res) => {
  const pokemons = await service.getAllPokemon();
  res.json(pokemons);
});

module.exports = router;
