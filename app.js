const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


app.use(bodyParser.json());
//Importar rotas
const postsRoute = require('./rotas/posts')

app.use('/posts', postsRoute);

//ROTAS
app.get('/',(req,res)=>{res.send('We are on home');});

//How to we start listening to the server
app.listen(3000);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, 
() => console.log('conectado ao banco de dados'));