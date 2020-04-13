const express =  require('express');
const router = express.Router();
const mongo = require('mongodb');
var assert = require('assert');

router.get('/get-all', function(req, res){
  var result = {schools:[]};
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://missionfwdduser:<password>@missionforward-p2ahr.gcp.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const databasesList = client.db("test").admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    res.send("hi");
  });
});
module.exports = router;
