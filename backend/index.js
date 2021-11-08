

const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const  { Pool } = require('pg');
const postings = require('./postings.js');
const accounts = require('./accounts.js');
const students = require('./students.js');
const companies = require('./companies.js');
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
app.get('/unapprovedPostings', async (req, res) =>{
    console.log('GET request on /unapprovedPostings');
    const response = await postings.getUnapprovedPosts(pool);
    res.status(200).send(response);
});

/**
 * Get approved postings
 */
app.get('/postings', async(req, res) =>{
    console.log('GET request on /postings');
    const response = await postings.getApprovedPosts(pool);
    res.status(200).send(response);
});

/**
 * Aprove post
 */
app.put('/approvePost', async (req, res) =>{
    console.log('PUT request on /approvePost');
    //console.log(req.body.id);
    await postings.approvePost(pool, req.body.id);
    res.status(200);
});

/**
 * Deny post
 */
app.delete('/postings', async(req, res) =>{
    console.log('DELETE request on /postings')
    await postings.denyPost(pool, req.body.id);
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

/**
 * Get unapproved students
 */
 app.get('/unapprovedStudents', async (req, res) =>{
    console.log('GET request on /unapprovedStudents');
    const response = await students.getUnapprovedStudents(pool);
    res.status(200).send(response);
});

/**
 * Get approved students
 */
app.get('/students', async(req, res) =>{
    console.log('GET request on /students');
    const response = await students.getApprovedStudents(pool);
    res.status(200).send(response);
});

/**
 * Aprove student
 */
app.put('/approveStudent', async (req, res) =>{
    console.log('PUT request on /approveStudent');
    await students.approveStudent(pool, req.body.email);
    res.status(200);
});

/**
 * Deny student
 */
app.delete('/students', async(req, res) =>{
    console.log('DELETE request on /students')
    await students.denyStudent(pool, req.body.email);
    res.status(200);
});

/**
 * Create a new student 
 */
 app.post('/students', async (req, res) =>{
    console.log('POST request on /students');
    console.log(req.body);
    const response = await students.addStudent(pool, req.body);
    if(response.rowCount > 0){
        res.sendStatus(201);
    }
    else{
        res.sendStatus(404);
    }

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