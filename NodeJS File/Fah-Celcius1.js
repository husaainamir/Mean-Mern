function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';  
   return message;
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
  return message;

} 

function rec(a,b)
{
    var length=a;
    var breadth=b;
    return length*breadth;
}

module.exports.cToF=cToF;
module.exports.fToC=fToC;
module.exports.rec=rec;