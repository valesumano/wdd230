// const date = new Date();
// const year = date.getFullYear();
// const modifiedDate = document.lastModified;
// const weatherAPI = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.15846&lon=-117.343&exclude=minutely,hourly,alerts&units=imperial&appid=b1159721bd65dac769dcd4f88420a53a'
// let numDrinks = localStorage.getItem(0) ? localStorage.getItem(0) : 0

// fetch(weatherAPI)
//     .then(res => res.json())
//     .then(data => {
//         const currentTemp = data.current.temp
//         const currentDescription = data.current.weather[0].description
//         const currentHumidity = data.current.humidity
//         const currentIcon = data.current.weather[0].icon

//         document.querySelector('.description').innerHTML = `${currentDescription}`
//         document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${currentIcon}@2x.png`
//         document.querySelector('.temperature').innerHTML = `${currentTemp} °F`
//         document.querySelector('.humidity').innerHTML = `Humidity: ${currentHumidity}%`
//         document.querySelector('.forecast').innerHTML = `
//             <u><h3>3 Day Forecast (Day)</h3></u>
//             Day 1: ${data.daily[0].temp.day}°F <br>
//             Day 2: ${data.daily[1].temp.day}°F <br>
//             Day 3: ${data.daily[2].temp.day}°F <br>
//         `
//     })

// document.getElementById("clearFormBtn").addEventListener("click", clear);

// function clear(event) {
//     localStorage.clear()
//     location.reload()
// }

// document.querySelector('.drinks').innerHTML = `${numDrinks}`
// document.querySelector('.copyright').innerHTML = `Copyright ${year} | Valentina Sumano`
// document.querySelector('.modified').innerHTML = `Last Modified: ${modifiedDate}`



//Last Updated

let currentdate = document.lastModified;

document.querySelector('.updated').textContent = currentdate;


var d = new Date();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfWeek = daysOfWeek[d.getDay()];
var day = d.getDate();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = months[d.getMonth()];
var year = d.getFullYear();

const date = dayOfWeek + ", " + day + " " + month + " " + year;

//Weather

const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/merida%20yucatan?unitGroup=us&key=RJAJQZV4DEV56W92HG7HZTZXF&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);

    let t = data.currentConditions.temp;
    document.querySelector('#t').textContent = t.toFixed(1);

    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('#ws').textContent = data.currentConditions.windspeed;
    document.querySelector('#condition').textContent =  data.currentConditions.conditions;
    document.querySelector('#weather_icon').src = image;
    document.querySelector('#weather_icon').alt= data.currentConditions.conditions + 'icon';
    document.querySelector('.high1').textContent =  data.days[0].tempmax;
    document.querySelector('.low1').textContent =  data.days[0].tempmin;

    document.querySelector('.high2').textContent =  data.days[1].tempmax;
    document.querySelector('.low2').textContent =  data.days[1].tempmin;


    document.querySelector('.high3').textContent =  data.days[1].tempmax;
    document.querySelector('.low3').textContent =  data.days[1].tempmin;

  };
getWeather();
