var express = require('express');
var fs = require('fs')
var router = express.Router();

/* POST reqs logging . */
router.post('/', function(req, res, next) {

    var body = '';
    filePath = __dirname + '/logs/webhooksChuck.txt';
    request.on('data', function(data) {
        body += data;
    });

    request.on('end', function (){
        fs.appendFile(filePath, body, function() {
            respond.end();
        });
    });

    console.log(req.body);
    res.send(req.body);
    
});

module.exports = router;
