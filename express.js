const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use(cookieParser());
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', (res, req, next)=> {
    console.log(res.url );
    next();
})

app.set('view engine', 'ejs')
app.get('/', function(req, res) {
    console.log(req.cookies);
    res.render('index')
	// res.send('<html><head><link href=assets/style.css rel=stylesheet /> </head><body><h1>Hello world!</h1></body></html>');
});

app.post('/person', urlencodedParser, (req, res)=> {
    res.send('Thank u');
    console.log(req.body.firstname);
})

app.post('/personjson', jsonParser, (req, res)=> {
    res.send('Thank u for the json data');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
})

app.get('/person/:id', (req, res)=> {
    console.log(req.url);
    console.log(req.params);
    //console.log('request url' + res.url );
    res.render('person', {
        ID: req.params.id,
        Qstr: req.query.qstr
    });
})

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});
app.listen(port)