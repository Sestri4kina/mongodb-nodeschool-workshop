var mongo = require('mongodb').MongoClient,
  age = process.argv[2],
  url = 'mongodb://localhost:27017/learnyoumongo';

//console.log(age);
mongo.connect(url, function(err, db){
  if (err) throw err;
  db.collection('parrots').find(
    {
      age: {$gt: +age}
    },
    {//properties with 1 are needed
      name: 1, age: 1, _id: 0
    }
  )
  .toArray(function(errr, docs){
    if (err) throw err;
    console.log(docs);
    db.close();
  })
});
