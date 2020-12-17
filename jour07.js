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
}
console.log("je commence ici")
var testO = "xoxox0xo"
console.log(countEach(testO))