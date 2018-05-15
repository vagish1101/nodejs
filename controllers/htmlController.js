
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
module.exports = function(app) {
    app.get('/', function(req, res) {
        console.log('2'+ req.cookies);
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
    
}