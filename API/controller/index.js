const express = require('express')
const bodyParser = require('body-parser')
const routes = express()

//Import all model's objects
const {users, products} = require('../model')

routes.get('/users',(req, res)=>{ //ROUTE FUNCTIONALITY-GET '/users'
    users.fetchUsers(req, res)
})

routes.get('/user/:id',(req,res)=>{ //ROUTE FUNCTIONALITY- GET '/users/:id'
    users.fetchUser(req, res)
})

routes.post('/register',bodyParser.json(), //ROUTE FUNCTIONALITY-POST '/users' (registration)
    (req,res)=>{
        users.register(req,res)
    }
)

routes.patch('/users/:id',bodyParser.json(), //ROUTE FUNCTIONALITY-PUT or PATCH '/users/:id'
    (req,res)=>{
    users.updateUser(req,res)
})

routes.post('/users',bodyParser.json(), //ROUTE FUNCTIONALITY-POST '/users (login)
    (req,res)=>{
    users.login(req,res)
    }
)

routes.delete('/user/:id',(req,res)=>{  //ROUTE FUNCTIONALITY- DELETE '/users/:id'
    users.deleteUser(req,res)
})

routes.get('/products',(req,res)=>{ 
    products.fetchProducts(req,res)  //ROUTE FUNCTIONALITY-GET '/products'
})

routes.get('/products/:id',(req,res)=>{
    products.fetchProduct(req,res)  //ROUTE FUNCTIONALITY-GET '/products/:id'
})

routes.post('/products',bodyParser.json(),
    (req,res)=>{
    products.createProduct(req,res) //ROUTE FUNCTIONALITY-POST '/products'
    }
)

routes.patch('/products/:id',bodyParser.json(), 
    (req,res)=>{
    products.updateProduct(req,res) //ROUTE FUNCTIONALITY-PUT OR PATCH '/products/:id'
})

routes.delete('/products/:id',(req,res)=>{  
    products.deleteProduct(req,res) //ROUTE FUNCTIONALITY-DELETE '/product/:id'
})

module.exports = {
    express,
    routes
}