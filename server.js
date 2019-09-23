const express = require('express');
const path = require('path')
const nodemon=require('nodemon');
const app= express();
const PORT = 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/app/style"));
app.use(express.static(__dirname + "/app/javascript"));

require("./routing/htmlRoutes.js")(app);
require("./routing/apiRoutes.js")(app);


app.listen(PORT,function(){
    console.log(`Listening on PORT ${PORT}`)
})