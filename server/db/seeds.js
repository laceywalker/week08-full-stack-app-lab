use bucketlist;
db.dropDatabase();


db.wishes.insertMany([
  {
    wish: "Visit Japan"
  },
  {
    wish: "Go to Disneyland"
  }
]);
