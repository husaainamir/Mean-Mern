  /*function factorial(n){

	var fact=1;

	for(var i=1;i<=n;i++){

	fact*=i;
	
	}return fact;

	}
	var result=factorial(5);

	console.log("factorial= "+result);*/



	/*var f2=function (n){//anonymous function

	var fact=1;// here f2 is function expression,by which only we can call the function

	for(var i=1;i<=n;i++){

	fact*=i;
	
	}
	return fact;

	}
	

	console.log(f2(5));*/


	/*var f1=(n)=> //arrow function or lambda function
	{ 
	var result=n*n;
         return result;
	}
	console.log(f1(5));*/


	var pow=(a,b)=>{

	var result=1;

	for(var i=1;i<=b;i++){

	result*=a;
	}
	return result;

	}
	var result=pow(2,3);

	console.log("result= "+result);