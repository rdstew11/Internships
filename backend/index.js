const express = require('express');
const app = express();
const port = 8080;

const dblogin = {
    username: 'rdstew',
    password: 'password'
}

app.get('/', (req, res)=>{
    res.send('hello');
});


//acounts DB
app.get('/accounts', (req,res) =>{
    const username = req.query.username;
    res.send(username);
});

app.listen(port, ()=>{
    console.log("Server running on " + port);
})