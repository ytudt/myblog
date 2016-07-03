

const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
const config = require('../config/config');

var UserSchema = new Schema({
  loginname: { type: String},
  passWord: { type: String },
  email: { type: String},
  avatar: { type: String, default:config.avatar},
  create_at: { type: Date, default: Date.now }
});

UserSchema.index({loginname: 1}, {unique: true});
UserSchema.index({email: 1}, {unique: true});

mongoose.model('User', UserSchema);
