const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(express.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('hikes');
    const hikesCollection = db.collection('hikes');
    const hikesRouter = createRouter(hikesCollection);
    app.use('/api/hikes', hikesRouter);
  })
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});