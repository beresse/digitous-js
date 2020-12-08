// 01 Number

var integer = 102;
var float = 13.9

console.log(integer);
console.log(float);
console.log(integer, float);


// 02 Convert

var basic = 34;
var stringified = basic.toString();
console.log(stringified);

// 03 Round
var num = 1.5
var rounded = Math.ceil(1.5);
var roundedTop = Math.ceil(1.5);
var roundedBot = Math.floor(1.5);
console.log(rounded);
console.log(roundedTop);
console.log(roundedBot);

// 04 Arithmétique

var test = 12;
var bis = 5;
console.log(test + bis);

// 05 Comparaison

var test = 143;
var bis = 219;

console.log(test > bis);
console.log(test < bis);
console.log(test >= bis);
console.log(test <= bis);
console.log(test == bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis);

// 06 Condition

var limit = 50;
var score = 64;
if (score >= limit) {
    console.log("Ok, good!")

} else {
    console.log("Oh nooooooooo!")
}

var limit = 50;
var score = 16;
if (score >= limit) {
    console.log("Ok, good!")

} else {
    console.log("Oh nooooooooo!")
}

// 07 Condition II

var password = "azerty";
if (password.length > 5) {
    console.log("The password is secure")
}

// 08 Condition III Extreme

var password = "azerty"
var limit = 50;
var score = 64;

if (password.length > 5 && (score >= limit)) {
    console.log("Everything is good")
} else if (password.length > 5) {
    console.log("Something is good")
} else if (score >= limit) {
    console.log("Something is good")
} else {
    console.log("Nothing is good")
}

// Bonus
var min = 1;
var max = 6;
var random = Math.floor(Math.random() * (max - min + 1) + min)
if (random === 6) {
    console.log("Yes I win !")
} else {
    console.log("So, close...")
}

console.log(random)

// Bonus II
var month = "January"
switch (month) {
    case "January":
        console.log("Winter");
        break
    case "February":
        console.log("Winter");
        break
    case "March":
        console.log("Spring");
        break
    case "April":
        console.log("Spring");
        break
    case "May":
        console.log("Spring");
        break
    case "June":
        console.log("Summer");
        break
    case "July":
        console.log("Summer");
        break
    case "August":
        console.log("Summer");
        break
    case "September":
        console.log("Fall");
        break
    case "October":
        console.log("Fall");
        break

    case "November":
        console.log("Fall");
        break
    case "December":
        console.log("Winter");
        break


}