// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
let currentdate = document.lastModified;

document.querySelector('.updated2').textContent = currentdate;


var d = new Date();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfWeek = daysOfWeek[d.getDay()];
var day = d.getDate();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = months[d.getMonth()];
var year = d.getFullYear();

const date = dayOfWeek + ", " + day + " " + month + " " + year;

document.querySelector('.updated').innerHTML = date;

const realDayofWeek = d.getDay();


if (realDayofWeek === 1 || realDayofWeek === 2) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}


//Hamburger Menu
const mainnav = document.querySelector('#nav');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('active');
})


//Banner

const date = new Date();
const dayOfWeek = date.getDay();
const banner = document.querySelector('.banner');

if(dayOfWeek === 1 || dayOfWeek === 2){
    banner.style.display = 'block';

} 
else {
    banner.style.display = 'none';
}



//Weather calculator
const temp = document.querySelector('.t').textContent;
const ws = document.querySelector('.ws').textContent;

let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(ws,0.16)) + (0.4275*temp*Math.pow(ws,0.16)));

let windchill = document.querySelector('.wc');
if (temp <= 50 && ws >= 3) {
    windchill.textContent = chill;
}


//storage local and session

localStorage.setItem('name', 'Valentina Sumano - Permanent');
sessionStorage.setItem('class', 'WDD230 - not permanent');



//weather 
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
    document.querySelector('#weather_icon').alt= data.currentConditions.conditions + ' icon';


    //windchill information here
  };
getWeather();




