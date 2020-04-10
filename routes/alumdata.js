const router = require('express').Router();
const mongoose = require('mongoose');

mongoose.pluralize(null);
const Schema = mongoose.Schema;

const alumDataSchema = new Schema({
  school: {type: String, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true},
  major: {type: String, required: true},
  minor: {type: String, required: false},
  grad: {type: String, required: true},
  anon: {type: String, required: true},
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

router.route('/add').post((req, res) => {

  const school = req.body.school;
  const name = req.body.name;
  const email = req.body.email;
  const major = req.body.major;
  const minor = req.body.minor;
  const grad = req.body.grad;
  const anon = req.body.anon;
  const q0 = req.body.q0;
  const q1 = req.body.q1;
  const q2 = req.body.q2;
  const q3 = req.body.q3;
  const q4 = req.body.q4;
  const q5 = req.body.q5;
  const q6 = req.body.q7;
  const q7 = req.body.q8;
  const q8 = req.body.q8;
  const q9 = req.body.q9;


  const currAlumDataRef = mongoose.model(school, alumDataSchema);

  const newAlumData = new currAlumDataRef({
    school, name, email, major, minor, grad, anon, q0, q1, q2, q3, q4, q5, q6, q7, q8, q9,
  });

  newAlumData.save()
  .then(() => res.json('Alumni Data Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
