var a=[1,10,50,200,900,90,40];
var _ =require('underscore');
var results=_.filter(a,function(item){return item>100});
console.log(results);