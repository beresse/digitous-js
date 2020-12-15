// 01 - Object
var cat = {
    name: "Garfiled",
    age: 3,
    isCute: true,
    
}
console.log(cat.age)
if (cat.isCute = true){
    console.log("So Cute!")
}

// 02 - Combine
var cat2 = {
    name: "Elon",
    age: 34,
    isCute: false,
    
}
var cats = [cat,cat2]
console.log(cats)
console.log(`L'age de cat est de ${cat.age} ans.`, ` Et pour la beauté de cat 2 c'est ${cat2.isCute}`)

// 03 - Even
// j'ai passé beaucoup de temps avant de comprendre que num est un paramètre, il me faut une peu plus d'assiduité  😅
function checkIfEven (num) {
    if (num % 2 === 0) {
        console.log("Even")
        
    } else {
        console.log("Odd")
    }
    
}
checkIfEven(14)
checkIfEven(37)


// 04 - Compare
function compare(num1,num2){
    if (num1 > num2) {
        console.log(`${num1} of num 1 is bigger`)
    } else if (num1 < num2) {
        console.log(`${num2} of num 2 is bigger`)
    } else if (num1 === num2) {
        console.log(`${num1} and ${num2} both are the same number`)
    }
}

compare(14,15)
compare(17,12)
compare(7,7)

// 05 - Add Up

function addUp(num){
    var sum = 0;

    for (var i = 0; i <= num; i++){
        sum += i;
        

    }
    return sum


}
var result = addUp(12)
console.log(result)
console.log(addUp(12))

// 06 - Time

// num c'est 3700
function format (num){
    var heures = Math.floor(num / (3600))
    var minutes = Math.floor((num - 3600) / 60)
    var secondes = num % 60;
    console.log(`${heures} : ${minutes} : ${secondes}`)
}

format(3700)