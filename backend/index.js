

const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const  { Pool } = require('pg');
const postings = require('./postings.js');
const accounts = require('./accounts.js');
const companies = require('./companies');
const students = require('./students');
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


app.get('/postings', async(req, res) =>{
    const param = req.query.q;
    let response;
    if(param == 'approved'){
        response = await postings.getApprovedPosts(pool);
    }
    else if(param == 'unapproved'){
        response = await postings.getUnapprovedPosts(pool);
    }
    else{
        console.log('specific GET on /postings');
        console.log(param);
        response = await postings.getPostingsByCompany(pool, param);
        console.log(response);
    }
    res.status(200).send(response);
});

app.delete('/postings', async(req, res) =>{
    console.log('DELETE request on /postings')
    await postings.denyPost(pool, req.body.id);
    res.sendStatus(200);
});

app.put('/postings', async (req, res) =>{
    console.log('PUT request on /postings');
    //console.log(req.body.id);
    await postings.approvePost(pool, req.body.id);
    res.sendStatus(200);
});


/**
 * Create a new posting
 */
app.post('/postings', async (req, res) =>{
    console.log('POST request on /postings');
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


app.put('/company', async (req, res) => {
    console.log('PUT request on /company');
    await companies.approveCompany(pool, req.body.name);
    res.sendStatus(200);
})

app.delete('/company', async (req, res) =>{
    console.log('DELETE request on /company')
    await companies.denyCompany(pool, req.body.name);
    res.sendStatus(200);
})


app.get('/search-postings', async (req, res) => {
    console.log('GET request on /search-postings');
    const response = await postings.searchPosts(pool, req.query.q);
    res.status(200).send(response);
});

app.get('/search-companies', async (req, res) => {
    console.log('GET request on /search-companies');
    const response = await companies.searchCompanies(pool, req.query.q);
    res.status(200).send(response);
})

app.post('/company', async (req, res) =>{
    console.log('POST request on /postings');
    const response = await companies.addCompany(pool, req.body);
    if(response.rowCount > 0){
        res.sendStatus(201);
    }
    else{
        res.sendStatus(404);
    }
})


app.post('/accounts', async(req, res) => {
    console.log('POST on /accounts');
    const response = await accounts.addAccount(pool, req.body);

    if(response.error != null){
        
    }
})


app.get('/students', async(req, res) =>{
    console.log('GET request on /students');

    const param = req.query.q;
    let response;
    if(param == 'approved'){
        response = await students.getApprovedStudents(pool);
    }
    else if(param == 'unapproved'){
        response = await students.getUnapprovedStudents(pool);
    }
    return res.status(200).send(response);
});

app.post('/students', async(req, res) =>{
    console.log('POST request on /students');
    console.log(req.body);
    const response = await students.addStudent(pool, req.body);
    if(response.rowCount > 0){
        res.sendStatus(200);
    }
    else {
        res.sendStatus(404);
    }
});


app.put('/students', async(req, res) =>{
    console.log('PUT request on /students');
    await students.approveStudent(pool, req.body.email);
    res.sendStatus(200);
});

app.delete('/students', async(req, res) =>{
    console.log('DELETE request on /students');
    await students.denyStudent(pool, req.body.email);
    res.sendStatus(200);
})

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
            expiration: 120,
            type: response.rows[0].account_type
        });
    }
    else{
        res.sendStatus(401);
    }
});

app.listen(port, ()=>{
    console.log("Server running on " + port);
})