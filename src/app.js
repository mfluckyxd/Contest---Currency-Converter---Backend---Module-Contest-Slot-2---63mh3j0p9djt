const express = require('express');
const app = express();
const currencyRoutes = require('../routes/currencyRoutes');

app.use(express.json());

app.use('/api/currency', currencyRoutes);

module.exports = app;
