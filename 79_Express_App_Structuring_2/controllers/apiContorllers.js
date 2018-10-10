
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = function(app){

    // Sending JSON to the response using json function and passing object
    app.get('/api',function(req,res){
        res.json({fName:'Dinesh',lName:'Elumalai'})
    });

    app.post('/api/login', jsonParser, function (req, res) {
        if (!req.body) return res.sendStatus(400)
        res.send('welcome, ' + req.body.userName)
        console.log(req.body.firstName);
        console.log(req.body.lastName);
        console.log(req.body);
    });
};


