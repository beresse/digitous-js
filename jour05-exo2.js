function multiply (num){
   
    for (i = 1; i <=10; i++){
        console.log(num + '*' + i + ' est égale à :')
        console.log( num * i)
    }
}

console.log(multiply(process.argv[2]));
