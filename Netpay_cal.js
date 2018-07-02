function NetpayCalculation(amount){
    var HRA;
    var grossPay;
    var netPay;

    if(amount>50000)
       { HRA=(40/100)*amount;
        grossPay =amount+HRA;
        netPay=grossPay-1000;

    }
    else { HRA=(40/100)*amount;
        grossPay =amount+HRA;
        netPay=grossPay-1000;

    }
        
    return netPay;
}
module.exports. NetpayCalculation= NetpayCalculation;