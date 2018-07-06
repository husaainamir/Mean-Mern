var MongoClient=require('mongodb').MongoClient;
var findQuery={empName:'Ram'};
MongoClient.connect('mongodb://127.0.0.1:27017/sample',function(err,db){
    if(err){
        console.log(err);
        }
        db.collection('emp').find(findQuery).toArray(function(err,result){
          if(err)throw err;
          console.log(result);
        });
        db.close();
 
    });