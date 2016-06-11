var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  loginname: { type: String },
  author: { type: String },
  create_at: { type: Date, default: Date.now }

});

ArticleSchema.index({ author: 1 }, { unique: true });


mongoose.model('Article', ArticleSchema);
