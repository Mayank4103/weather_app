async function getWeather() {
    const city = search.value;

    const url = `https://yahoo-weather5.p.rapidapi.com/weather?format=json&u=c&location=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '54fd88f945msh0f15430e7f43d30p124d41jsnf9f00286114a',
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        
        if (result.current_observation) {
            const condition = result.current_observation.condition;
            const atmosphere = result.current_observation.atmosphere;
            const wind = result.current_observation.wind;
            const astronomy = result.current_observation.astronomy;

            document.getElementById('temp').innerText = condition.temperature;
            document.getElementById('wind-speed').innerText = wind.speed;
            document.getElementById('humidity').innerText = atmosphere.humidity;
            document.getElementById('sunrise').innerText = astronomy.sunrise;
            document.getElementById('sunset').innerText = astronomy.sunset;
            document.getElementById('condition').innerText = condition.text;
        
        }
    } catch (err) {
        console.error(err);
    }
}

// Call the function with a city name
//getWeather('Jabalpur');
