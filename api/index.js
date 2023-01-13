const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routerApi = require('./Routs');
const corsOptions = require('./auth/cors/cors');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const PORT = 3000;
// console.log(corsOptions);

app.get('/', (req, res) => {
  res.send('My app');
}).listen(PORT, () => console.log('listen to port 3000'));
app.use(cors(corsOptions));

routerApi(app);
