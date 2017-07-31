
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Article = new Schema({

  title: {
    type: String,
    required: true
  },
  date: {
  	type: Date,
  	default: Date.now,
  	required: true
  },
  url: {
  	type: String,
  	required: true,
  	unique: true
  }
});


module.exports = mongoose.model('Article', Article);