const express = require('express');
const app = express();
const currencyRoutes = require('../routes/currencyRoutes');
const mongoose = require('mongoose');

app.use(express.json());

app.use('/api/currency', currencyRoutes);

module.exports = app;
