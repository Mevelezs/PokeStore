const express = require('express');
const routerApi = require('./src/Routs');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('My app');
}).listen(PORT, () => console.log('listen to port 3000'));

app.use(express.json());

routerApi(app);
