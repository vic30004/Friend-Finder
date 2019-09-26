// const faker= require('faker');
// const fs= require('fs');

//this is to generate name photo and score

// fs.appendFileSync("friends.txt",`\nname: "${faker.name.findName()}",\nphoto:"${faker.image.people()}",\nanswer:[${Math.floor(Math.random()*5)+1},${Math.floor(Math.random()*5)+1},${Math.floor(Math.random()*5)+1},${Math.floor(Math.random()*5)+1},${Math.floor(Math.random()*5)+1},${Math.floor(Math.random()*5)+1},${Math.floor(Math.random()*5)+1},${Math.floor(Math.random()*5)+1},${Math.floor(Math.random()*5)+1},${Math.floor(Math.random()*5)+1}]`,function(){
//     console.log("Name added")
// })


const frinedsList = [
    {
        name:"Ethelyn Moore",
        photo:"http://lorempixel.com/640/480/people",
        score:[5,2,3,4,1,1,3,4,5,3]
    },
    {
        name: "Amos Dietrich",
        photo:"http://lorempixel.com/640/480/people",
        score:[2,1,3,5,2,2,5,2,2,3]
    },

    {
        name: "Adonis Abbott",
        photo:"http://lorempixel.com/640/480/people",
        score:[2,1,2,4,5,2,5,3,5,3]
    },

    {
        name: "Rollin Mosciski",
        photo:"http://lorempixel.com/640/480/people",
        score:[2,2,1,2,2,2,3,3,3,1]
    },

    {
        name: "Neha Konopelski",
        photo:"http://lorempixel.com/640/480/people",
        score:[2,2,5,1,3,2,5,5,2,5]
    }
]

module.exports=frinedsList;