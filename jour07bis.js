var fs = require("fs");

fs.readFile("./jour07.txt", function(error,data   ){
    console.log(error)
    console.table(data.toString());
  //  var tableau = data.toString();
 //   console.table(tableau)
} )

// Map double
var array = [1, 2, 3, 4, 5];
var double = array.map(function(num){
    return num * 2;
})
console.log(double);

// 03 Map Names
var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]
var shortNames = longNames.map(function(short){
    return { name: short.firstName + ' ' + short.lastName   }
})

console.log(shortNames)

// 04 