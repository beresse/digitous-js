// 01 - Alphabet

function sortLetters(string) {

    var tableau = string.split("");
    var tableauRetourne = tableau.sort();
    var sansTableau = tableauRetourne.join("")
    return  sansTableau
}
var string = "konexio"

console.log(sortLetters(string))

// 02 - XOXO
function countEach(string){

    var numX = 0;
    var numO = 0;
    var i = 0;
    while (i < string.length){
        if (string[i] == "x") {
            console.log("je suis ma fonction x ")
            numX++;

            
        }else if (string[i] == "o") {
            console.log("je suis ma fonction o")
            numO++;
        }
        i++;
    }

if (numX === numO) {
    console.log("True")
    
} else{
    console.log("False")
}
return
}
console.log("je commence ici")
var testO = "xoxo"
console.log(countEach(testO));

// 03 - palindrome

function checkPal(string) {
    
    var petiteString = string.toLowerCase();
    var stringReverse = petiteString.split('').reverse().join(''); 
    var exemple = ["SOS", "KAYAK", "REVER"]
    if (stringReverse === petiteString) {
        console.log(`${petiteString} est un palindrome `)
        
    }else{
        console.log("Nope ce n'est pas un Palindrome voici des exemples :");
        console.table(exemple)
    }
    return stringReverse === petiteString;
 }
 
  console.log(checkPal("kaya"));

