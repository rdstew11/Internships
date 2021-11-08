const express = require('express');
const app = express();
app.use('/', express.static('frontend'));
app.get('/', (req, res) =>{
    res.redirect('/index.html');
})
app.listen(4200, () =>{console.log('Frontend listening on port ' + port)});