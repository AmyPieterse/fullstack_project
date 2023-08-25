const db = require('../config')
const {sign, verify} = require('jsonwebtoken')

require("dotenv")

function createToken(user){
    return sign(
    {
        emailAdd: user.emailAdd,
        userPass: user.userPass 
    },
    process.env.SECRET_KEY, 
    {
        expiresIn:'1h'
    })
}

function verifyAToken(req, res, next){
    try{
        const token = req.headers["authorization"]
        if(!token){
            return res.status(401).json({
                status:res.statusCode,
                msg:'Authorization token not found'
            })
        }
        const decodedToken = verify(token, process.env.SECRET_KEY);
        if(!decodedToken){
            return res.status(403).json({
                status:res.statusCode,
                msg:"Invalid token"
            })
        }
        next()
    }catch(e){
        res.status(500).json({
            status: res.statusCode,
            msg: e.message
        })
    }
}
module.exports = {
    createToken,
    verifyAToken
}