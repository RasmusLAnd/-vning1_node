var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */


  router.get('/', function(req, res, next) {
  fs.readFile('maillist.json', (err,data)=>
  {
    if(err) throw err;

    var maillist = JSON.parse(data);
    newMail ={
      "id":2,
      "mail":"bbb@bbb.com"
    }
    //res.send(newMail);
    maillist.push(newMail);
    //res.send(newMail);

    var savemails = JSON.stringify(maillist);
    //res.send(savemails);
    fs.writeFile('maillist.json', savemails, (err, data) => {
      if(err) throw err;
      
    });
    res.send("new mail created");
  });


});
module.exports = router;
