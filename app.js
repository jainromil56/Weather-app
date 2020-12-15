const request = require('request')
const rquest = require('request')
const geocode = require('./utils/giocode')
const forecast = require('./utils/forecast')

// console.log('Starting')

// take 2 arguments (function, time in ms)
// setTimeout(()=> {
//     console.log('2 second timer')
// }, 2000)

// setTimeout(()=>{
//     console.log('0 sec timer')
// }, 0)

// console.log('Stoping')
// const url = 'http://api.weatherstack.com/current?access_key=afd1d062b6dbf17543bdf1a48c49b037&query=27.0238,74.2179&units=f'

// request({ url: url, json: true }, (error, response) => {

//     if(error){
//         console.log("Unable to connect to the weather service!")
//     }else if(response.body.error){
//         console.log("unable to find location")
//     }else{
//     const temp = response.body.current
//     console.log(temp.weather_descriptions[0]+" It is currently "+temp.temperature+" degrees out, It feels like "+temp.feelslike+" degree out.")
//     // const data = JSON.parse(response.body)
//     // console.log(data.current)
//     }

// })

// Address -> Lat/Long -> Weather

// const location = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianJvbWlsNTEiLCJhIjoiY2tpbGtybTVtMGowMjJ2cDk1ZDVtNXFoaSJ9.L8Erb3zGbn9w1V0-Adl1tg&limit=1"
// request({ url: location, json: true }, (error, response) => {

//     if(error){
//         console.log("unable to connect to mapbox api")
//     }else if(response.body.features.length === 0 ){
//         console.log("Unable to find location. Try another search")
//     }else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude+" "+longitude)
//     }

// })




// have to define undefine for error or data so no confusion for passing 
//  if their is an error return function will stop running the code below it
// put location name down and check all weather details

// process.argv for location input in console 
// try - node app.js london
// you can specify more in double quotes - node app.js "Kota rajasthan"
const LocationInput = process.argv[2]

if(!LocationInput){
    console.log("no location provided")
} else {

    geocode(LocationInput, (error, {latitude, longitude, location}) => {
        if(error){
            return console.log(error)
        }

        // console.log("Error", error)
        console.log("Location - ", location)

        forecast( latitude, longitude, (error, forecastdata) => {
            if(error){
                return console.log(error)
            }
            // console.log("Error", error)
            console.log("Weather Report - ", forecastdata)
        })

    })

}