const express = require('express');
const cors = require('cors');
const toDoRouter = require('./routes/toDoRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', toDoRouter);

module.exports = app;
