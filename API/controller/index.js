const express = require('express')
const bodyParser = require('body-parser')
const routes = express()
// const {verifyAToken} = require('../middleware/authenticate')
//Import all model's objects
const {users, products} = require('../models')

//ROUTE FUNCTIONALITY-GET '/users'
routes.get('/users',(req, res)=>{ 
    users.fetchUsers(req, res)
})

//ROUTE FUNCTIONALITY- GET '/users/:id'
routes.get('/users/:id',(req,res)=>{ 
    users.fetchUser(req, res)
})

//ROUTE FUNCTIONALITY-POST '/users' (registration)
routes.post('/register',bodyParser.json(), 
    (req,res)=>{
        users.register(req,res)
    }
)

//ROUTE FUNCTIONALITY-PUT or PATCH '/users/:id'
routes.patch('/users/:id',bodyParser.json(), 
    (req,res)=>{
    users.updateUser(req,res)
})

//ROUTE FUNCTIONALITY-POST '/users (login)
routes.post('/login',bodyParser.json(), 
    (req,res)=>{
    users.login(req,res)
    }
)

//ROUTE FUNCTIONALITY- DELETE '/users/:id'
routes.delete('/users/:id',(req,res)=>{  
    users.deleteUser(req,res)
})

//ROUTE FUNCTIONALITY-GET '/products'
routes.get('/products', (req,res)=>{ 
    products.fetchProducts(req,res)  
})

//ROUTE FUNCTIONALITY-GET '/products/:id'
routes.get('/products/:id',(req,res)=>{
    products.fetchProduct(req,res)  
})

//ROUTE FUNCTIONALITY-POST '/products'
routes.post('/products',bodyParser.json(),
    (req,res)=>{
    products.createProduct(req,res) 
    }
)

//ROUTE FUNCTIONALITY-PUT OR PATCH '/products/:id'
routes.patch('/products/:id', bodyParser.json(), 
    (req,res)=>{
    products.updateProduct(req,res) 
})

//ROUTE FUNCTIONALITY-DELETE '/product/:id'
routes.delete('/products/:id',(req,res)=>{  
    products.deleteProduct(req,res) 
})

module.exports = {
    express,
    routes
}