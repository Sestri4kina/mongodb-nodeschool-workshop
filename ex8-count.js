var mongo = require('mongodb').MongoClient,
  age = process.argv[2],
  url = 'mongodb://localhost:27017/learnyoumongo';

//console.log(age);
mongo.connect(url, function(err, db){
  if (err) throw err;
  db.collection('parrots').count(
    {
      age: {$gt: +age}
    },
    function(errr, docs){
      if (err) throw err;
      console.log(docs);
      db.close();
    }
  )
});
