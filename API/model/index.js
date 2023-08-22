//import all models
const Users = require('./user')
const Products = require('./products')

//If you have a class you need to create an oject to import 
//Export all objects
module.exports ={
    users: new Users(), //creating a new object /instance of a class 
    books: new Products(),
}