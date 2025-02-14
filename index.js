let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forcast = document.querySelector(".weather_forecast");
let w_temprature = document.querySelector(".weather_temperature");
let w_icon = document.querySelector(".weather_icon");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");

let w_feelsLike = document.querySelector(".weather_feelsLike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");

let citySearch = document.querySelector(".weather_search");
const API = 'f6cef6d51155417580792021251402';

const getDateTime = (dt) => {
    const curDate = new Date(dt);
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(curDate);
};

let city = "pune";

// Search function
citySearch.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityInput = document.querySelector(".city_name");
    city = cityInput.value;
    getWeatherData();
    cityInput.value = "";
});

// Fetch and display
const getWeatherData = async () => {
    const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${API}&q=${city}`;
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        console.log(data);

        // WeatherAPI.com response structure is different
        const { location, current } = data;
        
        cityName.innerHTML = `${location.name}, ${location.country}`;
        dateTime.innerHTML = getDateTime(location.localtime);

        w_forcast.innerHTML = `${current.condition.text}`;
        w_icon.innerHTML = `<img src="https:${current.condition.icon}" alt="weather icon">`;

        w_temprature.innerHTML = `${current.temp_c}&#176;C`;
        // Note: WeatherAPI.com doesn't provide min/max in current weather
        // You'd need to use forecast API for that
        w_minTem.innerHTML = `Feels like: ${current.feelslike_c}&#176;C`;
        w_maxTem.innerHTML = ``;
        
        w_feelsLike.innerHTML = `${current.feelslike_c}&#176;C`;
        w_humidity.innerHTML = `${current.humidity}%`;
        w_pressure.innerHTML = `${current.pressure_mb} hPa`;
        w_wind.innerHTML = `${current.wind_kph} km/h`;

    } catch (error) {
        console.log(error);
        cityName.innerHTML = "City not found";
        // Clear other weather data
        dateTime.innerHTML = "";
        w_forcast.innerHTML = "";
        w_icon.innerHTML = "";
        w_temprature.innerHTML = "";
        w_minTem.innerHTML = "";
        w_maxTem.innerHTML = "";
        w_feelsLike.innerHTML = "";
        w_humidity.innerHTML = "";
        w_pressure.innerHTML = "";
        w_wind.innerHTML = "";
    }
}

// Initialize weather data on page load
window.addEventListener("load", getWeatherData);