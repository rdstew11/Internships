

const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const  { Pool } = require('pg');
const postings = require('./postings.js');
const accounts = require('./accounts.js');
const companies = require('./companies');
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

/**
 * Get unapproved postings
 */
app.get('/unapproved', async (req, res) =>{
    console.log('GET request on /unapproved');
    const response = await postings.getUnapprovedPosts(pool);
    res.status(200).send(response);
});


app.get('/postings', async(req, res) =>{
    console.log('GET request on /postings');
    const response = await postings.getApprovedPosts(pool);
    res.status(200).send(response);
});

app.delete('/postings', async(req, res) =>{
    console.log('DELETE request on /postings')
    await postings.denyPost(pool, req.body.id);
    res.status(200);
});

app.put('/approve', async (req, res) =>{
    console.log('PUT request on /approve');
    //console.log(req.body.id);
    await postings.approvePost(pool, req.body.id);
    res.status(200);
});


/**
 * Create a new posting
 */
app.post('/postings', async (req, res) =>{
    console.log('POST request on /postings');
    console.log(req.body);
    const response = await postings.addPost(pool, req.body);
    if(response.rowCount > 0){
        res.sendStatus(201);
    }
    else{
        res.sendStatus(404);
    }

});


app.get('/company', async (req, res) => {
    const param = req.query.q;
    let response;
    if(param == 'approved'){
        response = await companies.getApprovedCompanies(pool);
    }
    else if(param == 'unapproved'){
        response = await companies.getUnapprovedCompanies(pool);
    }
    res.status(200).send(response.rows);
});

const RSA_PRIVATE_KEY = fs.readFileSync('./itRS256.key');
/**
 * User authentication
 */
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