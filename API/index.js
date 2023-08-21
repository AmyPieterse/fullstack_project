// Imported modules
const express = require('express')//imports express module
//express is a node framework that makes it easier to create routes, handle requests and manage middleware
const mysql = require('mysql')//
const dotenv = require('dotenv')// 

//Set up database connection
dotenv.config()
const db = mysql.createConnection({
    host:   process.env.DB_HOST,
    user:   process.env.DB_USER,
    password:   process.env.DB_PASSWORD,
    database:   process.env.DB_DATABASE
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err)
        return
    }
    console.log('Connected to database')
})

const app = express();

// Defining an endpoint for fetching all the users
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users'
    db.query(query, (err, results) => {
        if (err) {
        return res.status(500).json({ error: 'Failed to fetch users' })
        }
        return res.status(200).json(results)
    })
})

//Server 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
