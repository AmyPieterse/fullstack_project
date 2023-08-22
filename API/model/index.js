//import all models
const Users = require('./users')
const Orders = require('./orders')
const products = require('./products')

//If you have a class you need to create an oject to import 
//Export all objects
module.exports ={
    users: new Users(), //creating a new object /instance of a class
    orders: new Orders(),  
    books: new Products(),
}