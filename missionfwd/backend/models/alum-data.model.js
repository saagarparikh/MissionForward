const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alumDataSchema = new Schema({
  school: {type: String, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true},
  major: {type: String, required: true},
  minor: {type: String, required: true},
  grad: {type: String, required: true},
  q0: {type: String, required: true},
  q1: {type: String, required: true},
  q2: {type: String, required: false},
  q3: {type: String, required: true},
  q4: {type: String, required: true},
  q5: {type: String, required: false},
  q6: {type: String, required: true},
  q7: {type: String, required: true},
  q8: {type: String, required: true},
  q9: {type: String, required: false},
}, {
  timestamps: true,
});

const AlumniData = mongoose.model('AlumniData', alumDataSchema);

module.exports = AlumniData;
