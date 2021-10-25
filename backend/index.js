const express = require('express');
const postings = require('./postings.js');
const accounts = require('./accounts.js');
const Pool = require('pg').Pool;
const app = express();
const port = 8080;

const pool = new Pool({
    user: 'rdstew',
    host: 'localhost',
    database: 'internships',
    password: 'password',
    port: 5432,
});

pool.connect();

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

app.listen(port, ()=>{
    console.log("Server running on " + port);
})