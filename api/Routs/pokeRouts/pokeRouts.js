const { Router } = require('express');
const Pokemon = require('../../services/pokemonsServices');

const router = Router();

const service = new Pokemon();

router.get('/', async (req, res) => {
  try {
    const { name } = req.body;
    if (name) {
      const poke = await service.getPokemonByName(name);
      res.send(poke);
    } else {
      const pokemons = await service.getAllPokemon();
      res.json(pokemons);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const poke = await service.getPokemonById(id);
    res.status(200).json(poke);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  const data = req.body;
  await service.createPokemon(data);
  res.send(data);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const data = await service.updatePokemon(parseInt(id, 10), body);
    res.send(data);
  } catch (error) { console.log(error); }
});

module.exports = router;
