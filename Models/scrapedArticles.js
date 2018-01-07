// require mongoose
var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

// new Schema
var scrapedArticlesSchema = Schema({
	title: {
		type: String,
		required: true,
		unique: true // make sure the article is not repeated
	},
	synopsis: {
		type: String,
		required: true
	},
	articleURL: {
		type: String,
		required: true
	},
	comments: [{
		text: {
			type: String 
		}
	}]
});

// use the abvoe schema to make the scrapedArticles model
var scrapedArticles = mongoose.model('scrapedArticles', scrapedArticlesSchema);

// export the model so the server can use it
module.exports = scrapedArticles;