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
    if (id > 0) {
      const poke = await service.getPokemonById(id);
      res.status(200).json(poke);
    }
    res.status(404).send('pokemon not found');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
