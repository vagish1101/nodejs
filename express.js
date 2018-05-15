const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

var app = express();
mongoose.connect('mongodb://test:test@ds147872.mlab.com:47872/testaddress');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstName: String,
    lastName: String,
    address: String,
    ID: Number
})

var Person = mongoose.model('Person', personSchema);

var vagish = Person({
    firstName: 'Vagish',
    lastName: 'Gupta',
    address: 'xyz',
    id: 2290
})

// Save the user
vagish.save(function(error){
    if(error) throw error
    console.log('User saved')
})
 
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use(cookieParser());
app.set('view engine', 'ejs')
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', (req, res, next)=> {
    console.log(req.url)
    Person.find({}, (error , users)=>{
        if(error) throw error
        //console.log(users);
    })

    next();
})

apiController(app)
htmlController(app)

app.listen(port)