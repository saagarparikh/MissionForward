const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(process.env.MONGODB_URI || uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const alumniDataRouter = require('./routes/alumdata');
const schoolsRouter = require('./routes/schools');

app.use('/alumni-data', alumniDataRouter);
app.use('/schools', schoolsRouter);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

app.listen(port, () => {
  console.log('Mission Forward Server is now on Port: ' + port);
});
