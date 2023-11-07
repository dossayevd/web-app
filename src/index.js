const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, connect } = require('../models');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(require('./routes'));

app.listen(port, async () => {
  console.log(`Express приложение запущено на порту ${port}`);

  await connect();
});
