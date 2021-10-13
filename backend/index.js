const express = require('express');
const app = express();
const port = 8080;

const dbLogin = {
    username: 'rdstew',
    password: 'password'
};


app.get('/', (req,res)=>{
    res.send('hey');
});

app.get('/accounts', (req,res)=>{
    const username = req.query.username;
    res.send(username);
})


app.listen(port, ()=>{
    console.log('server running');
});
