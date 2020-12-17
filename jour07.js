// 01 - Alphabet

function sortLetters(string) {

    var tableau = string.split("");
    var tableauRetourne = tableau.sort();
    var sansTableau = tableauRetourne.join()
    return  sansTableau
}
var string = "konexio"

console.log(sortLetters(string))

// 02 - XOXO
function countEach(string){

    var numX = 0;
    var numO = 0;
    var i = 0;
    while (i < string){
        if (numX == "x") {
            console.log("je suis ici")
            numX++

            
        }
    }

if (numX === numO) {
    console.log("True")
    
} else{
    console.log("False")
}
}
var testO = "xoxooxo"
console.log(countEach(testO))