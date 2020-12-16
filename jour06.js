// 01 Format 
/* function formatDate (date){
    var today = new Date();
}
console.log(today.formatDate) */

function formatDate(aaaa,mm,jj){
    var today = new Date();
    var aaaa = today.getFullYear();
    var mm = today.getMonth() + 1;
    var jj = today.getDate()
    console.log(`Nous sommes le ${jj} / ${mm} / ${aaaa}`)

}
formatDate();

// 02
function calculateAge(aaaa,mm,jj){
    var today = new Date();
    var birthday = new Date(aaaa,mm,jj)
    var age = today.getFullYear() - birthday.getFullYear();
    var aaaa = birthday.getFullYear();
    var mm = birthday.getMonth() + 1;
    var jj = birthday.getDate();
    console.log(`Vous avez ${age} ans`)
    
}
/*if (calculateAge.length < 3 ) {
    console.log("Non")
  
    
    Message de condition ne fonctionnant pas
}*/
/*console.log("je suis ici")*/
calculateAge(1990,01,04)