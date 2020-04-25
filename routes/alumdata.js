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
  q8: {type: String, required: false},
  q9: {type: String, required: false},
}, {
  timestamps: true,
});

router.route('/get-schools').get((req, res) =>{
  const yeah= mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
  var schools = [];
  const connection = mongoose.connection;
  connection.once('open', function () {
      connection.db.listCollections().toArray(function (err, names) {
        if (err) {
          console.log(err);
        } else {
          for(var c in names){
            schools.push(names[c]["name"]);
          }
          schools.sort();
          var result = {schools: schools};
          res.send(JSON.stringify(result));
        }
      });
  });
})

function getMetaData(data, q_id){
  var result = {major: data["major"], co: data["grad"], answers: data[q_id]};
  return result;
}

router.route('/get-school-data').get((req, res) => {
  const school = req.query.school;
  console.log(school);
  //const school = "University of California-Santa Barbara";
  const SchoolAlumData = mongoose.model(school, alumDataSchema);
  var answers = [];

  for(var i = 0; i<10; i++){
    answers.push({id: i, answer: []});
  }

  SchoolAlumData.find({  })
    .then((data) => {

        for(var i in data){
          if(data[i]["q0"] != ""){
            answers[0].answer.push(getMetaData(data[i], "q0"));
          }

          if(data[i]["q1"] != ""){
            console.log(data[i]["q1"])
            answers[1].answer.push(getMetaData(data[i], "q1"));
          }

          if(data[i]["q2"] != ""){
            answers[2].answer.push(getMetaData(data[i], "q2"));
          }

          if(data[i]["q3"] != ""){
            answers[3].answer.push(getMetaData(data[i], "q3"));
          }

          if(data[i]["q4"] != ""){
            answers[4].answer.push(getMetaData(data[i], "q4"));
          }

          if(data[i]["q5"] != ""){
            answers[5].answer.push(getMetaData(data[i], "q5"));
          }

          if(data[i]["q6"] != ""){
            answers[6].answer.push(getMetaData(data[i], "q6"));
          }

          if(data[i]["q7"] != ""){
            answers[7].answer.push(getMetaData(data[i], "q7"));
          }

          if(data[i]["q8"] != ""){
            answers[8].answer.push(getMetaData(data[i], "q8"));
          }

          if(data[i]["q9"] != ""){
            answers[9].answer.push(getMetaData(data[i], "q9"));
          }
        }
        var result = {answers: answers};
        res.json(result);
    })
    .catch((error) => {
        console.log('error: ', error);
    });
})


function getContactData(data){
  ret_data = {};
  ret_data["name"] = data["name"];
  if(data["name"] == ""){
    ret_data["name"] = "Anonymous";
  }
  ret_data["school"] = data["school"];
  ret_data["email"] = data["email"];
  ret_data["grad"] = data["grad"];
  ret_data["major"] = data["major"];
  if(data["minor"] == ""){
    ret_data["minor"] = "N/A";
  }else{
    ret_data["minor"] = data["minor"];
  }
  return ret_data;
}

function compare( a, b ) {
  if ( a["name"] < b["name"] ){
    return -1;
  }
  if ( a["name"] > b["name"] ){
    return 1;
  }
  return 0;
}


router.route('/get-school-contacts').get((req, res) => {
  const school = req.query.school;
  const SchoolAlumData = mongoose.model(school, alumDataSchema);
  var contacts = [];

  SchoolAlumData.find({  })
    .then((data) => {
        for(var i in data){
          if((data[i]["anon"] == "No" || data[i]["anon"] == "no") && data[i]["name"] != ""){
            contacts.push(getContactData(data[i]));
          }
        }
        contacts.sort(compare)
        for(var i in data){
          if((data[i]["anon"] == "No" || data[i]["anon"] == "no") && data[i]["name"] == ""){
            contacts.push(getContactData(data[i]));
          }
        }
        var result = {contacts: contacts};
        res.json(result);
    })
    .catch((error) => {
        console.log('error: ', error);
    });
})


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
  const q6 = req.body.q6;
  const q7 = req.body.q7;
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
