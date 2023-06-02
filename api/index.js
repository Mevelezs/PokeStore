const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const routerApi = require('./Routs');
const corsOptions = require('./auth/cors/cors');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const port = process.env.PORT || 3000;
const host = process.env.HOST;
// console.log(corsOptions);

app.get('/', (req, res) => {
  res.send('My app');
}).listen(port, host, () => console.log('listen to port 3000'));
app.use(cors());

routerApi(app);
