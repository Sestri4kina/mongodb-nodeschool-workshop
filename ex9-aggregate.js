var mongo = require('mongodb').MongoClient,
  size = process.argv[2],
  url = 'mongodb://localhost:27017/learnyoumongo';

//console.log(age);
mongo.connect(url, function(err, db){
  if (err) throw err;
  db.collection('prices').aggregate([
    { $match: {size: size} },
    { $group: {
        _id: 'average',
        average: {$avg: '$price'}
    }}
  ]).toArray(function(err, results){
    if (err) throw err;
    console.log(Number(results[0].average).toFixed(2));
    db.close();
  })
});
