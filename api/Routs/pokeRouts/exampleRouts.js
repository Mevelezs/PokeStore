const { Router } = require('express');
const ExampleService = require('../../services/exampleService');

const router = Router();

const service = new ExampleService();

router.get('/', async (req, res) => {
  const rta = await service.getExample();
  res.send(rta);
});

router.get('/dos', async (req, res) => {
  const rta = await service.getExampleSequelize();
  res.send(rta);
});

module.exports = router;
