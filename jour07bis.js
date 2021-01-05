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

// 04 Filter Numbers
var array = [1,"toto",34,"javascript",8]
var numbers = array.filter(function(element){
	if (typeof element == "number") {
		return element


	}
})

console.log(numbers)

// 05 filter Even
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var even = numbers.filter(function (element) {
    if (element % 2 === 0) {
        return element
    }
})