const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()

//Import all model's objects
const {users} = require('../model')

routes.get('/users',(req, res)=>{    //ROUTE FUNCTIONALITY-GET '/users'
    users.fetchUsers(req, res)
})

routes.get('/user/:id',(req,res)=>{ //ROUTE FUNCTIONALITY- GET '/users/:id'
    users.fetchUsers(req,res)
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

routes.post('/users/',bodyParser.json(), //ROUTE FUNCTIONALITY-POST '/users/ (login)
    (req,res)=>{
    users.login(req,res)
    }
)

routes.delete('/user/:id',(req,res)=>{  //ROUTE FUNCTIONALITY- DELETE '/users/:id'
    users.deleteUser(req,res)
})

module.exports = {
    express,
    routes
}