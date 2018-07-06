
var rectangle=require('./rectangleb1')
var rectangle = require('mangodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/sample',function(err,db){
       if(err){
        console.log(err);
        }
        var  resultSet= db.collection('rectangle').find().toArray(function(err,result){
          if(err) throw err;
          console.log(result);
          for(var i=0;i<result.length;i++){
              console.log("Area="+rectangle.calculateArea(result[i].length,result[i].break));
         };
        db.close();
    
    }); 