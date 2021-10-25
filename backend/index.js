

const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const  { Pool } = require('pg');
const postings = require('./postings.js');
const accounts = require('./accounts.js');
const app = express();
const port = 8080;
const fs = require('fs');


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


const dblogin = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
}

const pool = new Pool(dblogin);



app.get('/', (req, res)=>{
    res.send('hello');
});

app.get('/postings', async (req, res) => {
    const posts = await postings.getPosts(pool);
    res.send(posts);
});

//acounts DB
app.get('/accounts', (req,res) =>{
    const username = req.query.username;
    res.send(username);
});

const RSA_PRIVATE_KEY = fs.readFileSync('./itRS256.key');

app.post('/login', async (req,res)=>{
    console.log("POST request on /login");
    const username = req.body.username;
    const password = req.body.password;

    const template = 'SELECT * FROM accounts WHERE username= $1 AND password = $2';
    const response = await pool.query(template, [username, password]);


    /**
     * FOR HASHING
     * const template = 'SELECT password FROM accounts WHERE username = $1';
     * 
     * Then hash password from request and compare to query result
     */
    
    if(response.rowCount > 0){
        if(response.rowCount != 1){
            console.log("ERROR: Greater than one authentication matches");
        }

        const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 120,
            subject: username
        });

        res.status(200).json({
            jwt: jwtBearerToken,
            expiration: 120
        });
    }
    else{
        res.sendStatus(401);
    }
});

app.listen(port, ()=>{
    console.log("Server running on " + port);
})