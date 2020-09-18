var express = require('express');
var fs = require('fs');
var router = express.Router();

/* POST reqs logging . */
router.post('/', function(req, res, next) {

    var file = "./public/logs.txt";
    var data = req.body;
    var appending = "\n"+JSON.stringify(data);
    fs.appendFile(file, appending, (err) => { 
        if (err) 
            console.log(err); 
        else { 
            console.log("Logs written successfully\n");
        } 
    }); 
    res.send(data);
    
});

module.exports = router;
