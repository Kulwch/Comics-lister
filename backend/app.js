const express = require('express');
const helmet = require('helmet');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const userRoutes = require('./routes/user');
const comicRoutes = require('./routes/comic');

const app = express();
app.use(helmet());

mongoose.connect(process.env.MONGOOSE_CONNECT.toString(),
  { useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));


app.use(express.json());
app.use(express.urlencoded({extended: true}));

module.exports = app;