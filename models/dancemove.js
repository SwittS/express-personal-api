var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DancemoveSchema = new Schema({
  name: String,
  yearCreated: Number,
  participation: String,
  socialContext: String,
  gif: String
});

var Dancemove = mongoose.model('Dancemove', DancemoveSchema);
module.exports = Dancemove;
