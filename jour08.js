
// 01
var request = require("request")
var countriesNames = []

request.get("https://restcountries.eu/rest/v1/all", function(error,response,body){
    var getCountries = JSON.parse(body)
    while (i < getCountries.length){

    }
    console.log((getCountries[0].name))
}) 
