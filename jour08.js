
// 01 Pas terminé de façon propre
const { get } = require("request");
var request = require("request");
request.get("https://restcountries.eu/rest/v2/all", function (err, res, body) {
    var getCountries = JSON.parse(body)
    for (let index = 0; index < getCountries.length; index++) {
        var pays = getCountries[index].name
        console.log(`${pays}- `)
        
    } })
    
 /*   var pays = getCountries.map(v => v.name)
    var str = pays.stringify
    console.log(getCountries)
    console.log(pays)*/

    


// 02 Chuck norris
request.get("https://api.chucknorris.io/jokes/random", function(error,response,body){
    console.log(response.statusCode)
    var getFact = JSON.parse(body);
    console.log(getFact.value)
})

// 03 Pokemon  
function catchPokemon(id){
    request.get(`https://pokeapi.co/api/v2/pokemon/${id}`, function(error,response,body){
        
        var pokemon = JSON.parse(body)
        console.log(response.statusCode)
        console.log(`Le pokemon numéro ${id} se nomme ${pokemon.name} en anglais`)
    })
}

catchPokemon(4)
