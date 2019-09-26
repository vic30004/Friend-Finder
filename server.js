const express = require('express');
const path = require('path')
const app= express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/app/style"));
app.use(express.static(__dirname + "/app/javascript"));

require("./routing/htmlRoutes.js")(app);
require("./routing/apiRoutes.js")(app);


app.listen(process.env.PORT || 5000);