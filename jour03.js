// 01
var fruits = [ "mango","lemon", "blueberry"];
console.log(fruits)
console.table(fruits)

// 02

var ingredients = [ "eggs","milk", "butter"]
console.log("Il me manque: " + ingredients[1])
console.log(ingredients.indexOf("butter"))

// 03

var objects = [ "pen", "book", "lamp"]
objects.unshift("chair")
console.log(objects)

objects.pop();
console.log(objects)
 
objects.push("laptop");
console.log(objects)

objects.shift();
console.log(objects)

// 4

var numbers = [4, 10, 8, 12 , 6];

numbers.reverse();
console.log(numbers)

numbers.sort((a,b) => a - b);
console.log(numbers)

// 5

var total = 0;
var limit = 10;
for (var i = 0; i <= limit; i++)
console.log(total + i)




// 6 

