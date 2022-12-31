const express = require('express');
const morgan = require('morgan');
const routerApi = require('./Routs');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('My app');
}).listen(PORT, () => console.log('listen to port 3000'));

app.use(express.json());
app.use(morgan('dev'));

routerApi(app);
