var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:true});

var indexRouter = require('./routes/index');
var mailRouter = require('./routes/mail');
var newmailRouter = require('./routes/newmail');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/mail', mailRouter);
app.use('/newmail', newmailRouter);


app.get('/hello', function(req,res){
    var html = '';
    html += "<body>";
    html += "<form action = '/mail' method ='post' name='form1'>";
    html += "Name: <input type='text' name ='name'><br/>";
    //html += "Mail: <input type='text' mail ='mail'><br/>";
    html += "<input type='submit' value = 'submit'><br/>";
    html += "</form>";
    html += "</body>";
    res.send(html);
});


app.post('/mail', urlEncodedParser, function(req,res){
    var reply ='';
    reply += "<br/>Well Hello " + req.body.name;
    res.send(reply);
});

module.exports = app;
