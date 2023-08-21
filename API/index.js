// Imported modules
const express = require('express')//imports express module
//express is a node framework that makes it easier to create routes, handle requests and manage middleware
const cors = require('cors')
const cookieParser = require("cookie-parser")

const PORT = +process.env.PORT || 3000 

const app = express()

//Server 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
