const API_KEY = "89d012dbaa73df387e45f6b93e8a6cb0";

async function getWeather() {

    const cityName = document.getElementById("cityName").value.trim();

    if (cityName === "") {
        alert("Please enter city name");
        return;
    }

    try {

        // API URL
        const WEATHER_API =
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

        const response = await fetch(WEATHER_API);

        const data = await response.json();

        console.log(data);

        // City not found
        if (data.cod != 200) {
            alert("City not found");
            return;
        }

        // Update Weather Data
        document.getElementById("City").innerText =
            data.name;

        document.getElementById("Location").innerText =
            `${data.name}, ${data.sys.country}`;

        document.getElementById("Temperature").innerText =
            data.main.temp;

        document.getElementById("Condition").innerText =
            data.weather[0].description;

        document.getElementById("Humidity").innerText =
            data.main.humidity;

        // Convert m/s to km/h
        document.getElementById("WindSpeed").innerText =
            (data.wind.speed * 3.6).toFixed(1);

        document.getElementById("Pressure").innerText =
            data.main.pressure;

        // Meter to KM
        document.getElementById("Visibility").innerText =
            (data.visibility / 1000).toFixed(1);

        // Weather Icon
        document.getElementById("WeatherIcon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    }

    catch (error) {

        console.log(error);

        alert("Something went wrong");

    }

}