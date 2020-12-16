// 01 Format 
/* function formatDate (date){
    var today = new Date();
}
console.log(today.formatDate) */

function formatDate(aaaa,mm,jj){
    var today = new Date();
    var aaaa = today.getFullYear();
    var mm = today.getMonth();
    var jj = today.getDate()
    console.log(`${jj} / ${mm} / ${aaaa}`)

}
formatDate();