var _ = require('underscore');
var a = [1,10,50,200,900,90,40];
//var odds=_.reject(a,function(num){return num%2==0;});
var result=_.reject(a,function(num){return num>100;});
console.log(result);