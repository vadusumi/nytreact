
//Dependencies
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var Article = require('./models/Article.js');


var PORT = process.env.PORT || 3000;


// Morgan
app.use(logger('dev'));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Static folder
app.use(express.static('./public'));


//Mongoose
mongoose.connect('mongodb://heroku_l62htk9w:9i533fbp65tqd2v9tf07aqma24@ds129053.mlab.com:29053/heroku_l62htk9w');

var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});


//Routes
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
});


app.get('/api/saved', function(req, res) {

  Article.find({})
    .then(function(err, data){

      	if (err) {
        	console.log(err);
      	} else {
        	res.send(data);
      	}
    });
});


app.post('/api/saved', function(req, res){

  	var newArticle = new Article({
	    title: req.body.title,
	    date: req.body.date,
	    url: req.body.url
  	});

  	newArticle.save(function(err, data){
	    if(err){
		    console.log(err);
		    res.send(err);
	    } else {
	      	res.json(data);
	    }
  	});
});


app.delete('/api/saved/:id', function(req, res){

  	Article.findByIdAndRemove(req.params.id, function(err, data){
  		res.send(data);
  	});
});


//Listener
app.listen(PORT, function() {
  console.log("App listening on port: " + PORT);
});