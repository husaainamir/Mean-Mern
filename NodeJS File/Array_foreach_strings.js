//Define the callback function.
function ShowResults(value){
    console.log("value:"+ value);
}
//create an array
var letters=['ab','cd','ef'];
//call the ShowResults callback

    letters.forEach(ShowResults);
