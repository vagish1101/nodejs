const express = require('express');
const hbs = require('hbs');
console.log(hbs);
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs')

app.get('/', (req, res)=>{
     // res.send('Testing');
   //  res.render('index')

})

app.listen(3000)

