const path = require('path');
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const parser = require('body-parser');


const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('bucketlist');
    const wishesCollection = db.collection('wishes')
    const bucketlistRouter = createRouter(wishesCollection);
    app.use('/api/bucketlist', bucketlistRouter);
  })
  .catch(console.error)


app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
