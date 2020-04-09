const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

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

app.use('/alumni-data', alumniDataRouter);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('/build'));
}

app.listen(port, () => {
  console.log('Mission Forward Server is now on Port: ' + port);
});
