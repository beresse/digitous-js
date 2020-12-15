function calculate(number1, operateur, number2) {
    var number1 = parseInt(number1);
    var number2 = parseInt(number2);
    if (operateur === "+") {
        console.log("Ceci est une addition")
        return number1 + number2
        
    }else if (operateur === "-") {
        console.log("Ceci est une soustraction")
        return number1 - number2
        
    }else if (operateur === "/") {
        console.log("Ceci est une division")
        return number1 / number2
    }else if (operateur === "*") {
        console.log("Ceci est une multiplication")
        return number1 * number2
        
    }else if (operateur === "%") {
        console.log("Ceci est un pourcentage*")
        return number1 % number2
        
    }else{
        console.log("ERROR")
    }
}
console.log(calculate(process.argv[2],process.argv[3],process.argv[4]));