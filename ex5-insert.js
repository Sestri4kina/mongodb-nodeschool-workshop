var mongo = require('mongodb').MongoClient,
  url = 'mongodb://localhost:27017/learnyoumongo',
  firstName = process.argv[2],
  lastName = process.argv[3];

var obj = {'firstName': firstName, 'lastName': lastName};

mongo.connect(url, function(err, db){
  if (err) throw err;
  db.collection('docs').insert(obj,
    function(err, data){
      if (err) throw err;
      console.log(JSON.stringify(obj));
      db.close();
    }
  );
});
