$(document).ready(function() {

    const currentWeather = (query) => {
        const key = "8251f0fbfe4f6cc8f28366441d663c86"
        const url = "https://api.openweathermap.org/data/2.5/weather"
        
        $.ajax({
            url: url,
            method: "GET",
            data: {q: query, appid: key, }
        })
        .then(function(response){
            console.log(url);
            console.log(response);
        })
    }

    const fiveDay = (query) => {
        const key = "8251f0fbfe4f6cc8f28366441d663c86"
        const url = "https://api.openweathermap.org/data/2.5/forecast"
        
        $.ajax({
            url: url,
            method: "GET",
            data: {q: query, appid: key }
        })
        .then(function(response){
            console.log(url);
            console.log(response);
        })
    }


    currentWeather("London");
    fiveDay("Philadelphia")



});