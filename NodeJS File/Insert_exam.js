var MongoClient=require('mongodb').MongoClient;
var empDoc={_id:'e1013',empName:"Sneha",department:"Meanstackkk",basicPay:28500};
MongoClient.connect('mongodb://127.0.0.1:27017/sample',function(err,db){
    if(err){
        console.log(err);
        }
        var  resultSet= db.collection('employee').insert(empDoc,function(err,result){
          if(err) throw err;
          else{
              console.log(result);
          }
          console.log(result);
        });
        db.close();
 
    });