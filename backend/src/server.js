const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const server = express();

mongoose.connect('mongodb://127.0.0.1/ominstack8',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);