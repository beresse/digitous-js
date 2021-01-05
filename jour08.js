
// 01 Pas terminé de façon propre
var request = require("request");
request.get("https://restcountries.eu/rest/v2/all", function (err, res, body) {
    var countriesName = [""]
    var getCountries = JSON.parse(body)
    console.log(getCountries[1].name)
});

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
