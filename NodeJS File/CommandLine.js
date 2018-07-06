	
	var sum=0;// use command line argument

	for(var i=2;i<process.argv.length;i++){
         sum+=parseInt(process.argv[i]);
	}
	console.log("sum="+sum);