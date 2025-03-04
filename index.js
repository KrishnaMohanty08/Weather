let cityName =document.querySelector(".weather_city");
let dateTime =document.querySelector(".weather_date_time");
let w_forcast =document.querySelector(".weather_forecast");
let w_temprature =document.querySelector(".weather_temperature");
let w_icon =document.querySelector(".weather_icon");
let w_minTem =document.querySelector(".weather_min");
let w_maxTem =document.querySelector(".weather_max");

let w_feelsLike =document.querySelector(".weather_feelsLike");
let w_humidity =document.querySelector(".weather_humidity");
let w_wind =document.querySelector(".weather_wind");
let w_pressure =document.querySelector(".weather_pressure");

let citySearch=document.querySelector(".weather_search");

//functions
//to get actual country name 
const getCountryName = (code) => {
    return code;
};

const getDateTime = (dt) => {
    const curDate = new Date(dt * 1000);
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
    let cityNameInput = document.querySelector(".city_name");
    city = cityNameInput.value;
    getWeatherData();
    cityNameInput.value = "";
});

// Fetch and display
const getWeatherData = async () => {
    const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=fbc256888466466a814174428250403&q=${city}&aqi=no`;
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        // Adjusting the destructuring based on the API response
        const { current, location } = data;
        const { temp_c, condition, wind_kph, pressure_in, humidity } = current;
        const { name, country, localtime_epoch } = location;

        console.log(data);
        cityName.innerHTML = `${name}, ${getCountryName(country)}`;
        dateTime.innerHTML = getDateTime(localtime_epoch);

        w_forcast.innerHTML = `${condition.text}`;
        w_icon.innerHTML = `<img src="https:${condition.icon}" alt="${condition.text}">`;

        w_temprature.innerHTML = `${temp_c}&#176;C`;
        w_minTem.innerHTML = `Min: ${temp_c}&#176;C`; // Adjust if you have min/max data
        w_maxTem.innerHTML = `Max: ${temp_c}&#176;C`; // Adjust if you have min/max data
        
        w_feelsLike.innerHTML = `${temp_c}&#176;C`; // Adjust if you have feels like data
        w_humidity.innerHTML = `${humidity}%`;
        w_pressure.innerHTML = `${pressure_in} in`;
        w_wind.innerHTML = `${wind_kph} kph`;

    } catch (error) {
        console.log(error);
    }
};

// Correctly attach the load event to the window
window.addEventListener("load", getWeatherData);