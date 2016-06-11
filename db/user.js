

var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var UserSchema = new Schema({
  loginname: { type: String},
  passWord: { type: String },
  email: { type: String},
  avatar: { type: String, default:''},
  create_at: { type: Date, default: Date.now }
});

UserSchema.index({loginname: 1}, {unique: true});
UserSchema.index({email: 1}, {unique: true});

mongoose.model('User', UserSchema);
