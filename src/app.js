const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const localAcess = "mongodb+srv://dbsol:dbsol@dbsolequador-vfz4r.azure.mongodb.net/solDB2?retryWrites=true&w=majority";
//Conectando ao banco localmente
mongoose.connect(localAcess,{useNewUrlParser: true});
//Conectando ao banco em produção
//mongoose.connect(process.env.MONGOLAB_URI,{useNewUrlParser: true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Rotas
const defaultRoute = require('./routes/default.js');
const UserRoute = require('../src/routes/UserRoute.js');
const ActRoute = require('../src/routes/ActRoute');
const ListRoute = require('../src/routes/ListRoute');

app.use('/',defaultRoute);
app.use('/users',UserRoute);
app.use('/activity',ActRoute);
app.use('/list',ListRoute);

module.exports = app;
