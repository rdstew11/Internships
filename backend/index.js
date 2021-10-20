const express = require('express');
const postings = require('./postings');
const accounts = require('./accounts');
const { Client } = require('pg');
const app = express();
const port = 8080;

const db = new Client({
    user: 'rdstew',
    host: 'localhost',
    database: 'internships',
    password: 'password',
    port: 8080,
});

db.connect();

app.get('/', (req, res)=>{
    res.send('hello');
});

app.get('/postings', (req, res) => {
    const posts = await postings.getPosts(db);
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