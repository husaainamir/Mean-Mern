function FtoC(Fahrenheit)
{
    
    var fToCel = (Fahrenheit - 32) * (9/5);
    
    
     return fToCel;
}
module.exports.FtoC=FtoC;