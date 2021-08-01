const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParse = require('body-parser');

//import routes
const postRoute = require('./routes/post');


app.use(bodyParse.json());
app.use('/post', postRoute);

//connect to mongodb
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
    console.log('connected db')
);

//listening to the server
app.listen(3000);