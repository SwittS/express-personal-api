var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DancemoveSchema = new Schema({
  name: String,
  year_created: Number,
  participation: String,
  social_context: String,
  url: String
});

var Dance_move = mongoose.model('Dancemove', DancemoveSchema);

module.exports = Dance_move;
