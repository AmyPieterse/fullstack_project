// Imported modules
const express = require('express')//imports express module
//express is a node framework that makes it easier to create routes, handle requests and manage middleware
const cors = require('cors')
const cookieParser = require("cookie-parser")

const PORT = +process.env.PORT || 3000 

const app = express()

// Middleware 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");// allow anyone to access api deploy vue.js and put in place of * or leave as *
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
})

app.use( //mount the middleware functions at the path which is being specified. 
    express.static('./static'),
    express.urlencoded({ 
    extended:false 
    }),
    cookieParser(),
    cors(),
    routes
)

app.use(errorHandling);

//Server 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
