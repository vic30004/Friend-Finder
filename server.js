const express = require('express');
const path = require('path')
const app= express();
const PORT = 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"/public/home.html"));
})

app.listen(PORT,function(){
    console.log(`Listening on PORT ${PORT}`)
})