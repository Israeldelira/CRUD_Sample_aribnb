const express = require('express');
const app = express();
app.use(require('./customer'));
app.use(require('./propiedad'));



module.exports = app;