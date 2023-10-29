const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
  // Field 1: Define a property for 'code' with a String data type and required true
  // Field 2: Define a property for 'name' with a String data type
  // Field 3: Define a property for 'exchangeRate' with a Number data type and required true
});

const Currency = mongoose.model('Currency', currencySchema);

module.exports = Currency;
