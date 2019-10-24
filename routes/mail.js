var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile('maillist.json', (err,data)=>
  {
    if(err) throw err;

    var mails = JSON.parse(data);
    res.send(mails);
  })
});

module.exports = router;
