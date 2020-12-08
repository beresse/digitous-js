console.log("Hello World !");

/* String*/

var test = "My name is Moh";
console.log(test);

/*03 - Concatenation*/

var name = "Moh"
console.log("Nice to meet you " + name);

/*04 - String Length*/
var testLength = "I'm very long !"
console.log(testLength.length);

/* 05 - Replace */

var food = "croissant is meh";
console.log(food.replace("meh" , "so good"));

/* 06 - Up and Down */
var basic = "This is Cool"
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();
console.log(basic, basicUp, basicDown)

/* 07 - Split */
var word = "banana"
var letters = word.split("");
console.log(letters);

/* 08 - Template */
var age = "30";
var template = `I'm ${age} years old`;
console.log(template);

/* ⭐ Bonus */

var prenomDuneFille = word.substring(1,4);
var celaCommencePar = basic.startsWith('This');
var celaNeCommencePas = food.startsWith('this')

console.log(prenomDuneFille);
console.log(celaCommencePar);
console.log(celaNeCommencePas);

var changed = "Bonjour"
var regex = /o/g;
console.log(changed.replace(regex,'a'));
