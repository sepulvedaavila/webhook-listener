var express = require('express');
var fs = require('fs');
var router = express.Router();

/* POST reqs logging . */
router.post('/', function(req, res, next) {

    var file = require("../var/log/whLog.txt"); 
    var data = req.body;
    fs.writeFile(file, data, (err) => { 
        if (err) 
            console.log(err); 
        else { 
            console.log("Logs written successfully\n");
        } 
    }); 
    //console.log(req.body);
    //res.send(req.body);
    
});

module.exports = router;
