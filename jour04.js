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