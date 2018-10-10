

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){

    // Sending html in response, express will take care of adding contect type to the headers
    app.get('/',function(req,res){
        res.render('index')
    });

    // API for using request parameter & Query Paramater
    app.get('/Person/:id',function(req,res){
        res.render('person',{ID:req.params.id , QSTR:req.query.page})
    });

    app.post('/login', urlencodedParser, function (req, res) {
        if (!req.body) return res.sendStatus(400)
        res.send('welcome, ' + req.body.userName)
        console.log(req.body.firstName);
        console.log(req.body.lastName);
    });

};
