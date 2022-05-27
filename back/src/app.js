const express = require('express');
const cors = require('cors');
const feedstock = require('./Routes/feedstockRouter/router');
const products = require('./Routes/productsRouter/router');

const app = express();

const db = require('./api/models/db');

app.get('/', async (req, res) => {
  res.send('PÁGINA INICIAL');
});

app.use(express.json());

app.use(cors());

app.use('/feedstock', feedstock);
app.use('/products', products);

module.exports = app;
