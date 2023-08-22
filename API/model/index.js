//import all models
const Users = require('./user')
const Products = require('./products')

//Export all objects
module.exports ={
    users: new Users(), //creating a new object instance of a class 
    books: new Products(),
}