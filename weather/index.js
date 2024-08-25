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
const getCountryName =(code)=>{
    return new Intl.DisplayNames([code],{type:"region"}).of(code);
}
const getDateTime =(dt)=>{
    
    const curDate =new Date(dt*1000);
    const options={
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",
        hour:"numeric",
        minute:"numeric",
    };
    const formatter =new Intl.DateTimeFormat("en-US",options);
    return formatter.format(curDate);
};

let city="pune";
//search function
citySearch.addEventListener("submit",(e)=>{
    e.preventDefault();

    let cityName = document.querySelector(".city_name");
    console.log(cityName.value);

    city=cityName.value;
    getWeatherData();
    cityName.value="";
});

//fetch and display
const getWeatherData =async()=>{
    const weatherUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[API KEY]`;
    try{
        const response =await fetch(weatherUrl);
        const data =await response.json();

        const {main,name,weather,wind,sys,dt} =data;
        console.log(data);
        cityName.innerHTML=`${name},${getCountryName(sys.country)}`;
        dateTime.innerHTML =getDateTime(dt);

        w_forcast.innerHTML=`${weather[0].main}`;
        w_icon.innerHTML=`${weather[0].icon}`;

        w_temprature.innerHTML=`${main.temp}&#176`;
        w_minTem.innerHTML=`Min:${main.temp_min.toFixed()}&#176`;
        w_maxTem.innerHTML=`Max:${main.temp_max.toFixed()}&#176`;
        
        w_feelsLike.innerHTML=`${main.feels_like}&#176`;
        w_humidity.innerHTML=`${main.humidity}&#176`;
        w_pressure.innerHTML=`${main.pressure}&#176`;
        w_wind.innerHTML=`${wind.speed}&#176`;



    }
    catch (error){
            console.log(error);
        }
    
}
document.body.addEventListener("load",getWeatherData());

