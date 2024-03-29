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
    document.querySelector('.high1').textContent =  data.days[0].tempmax;
    document.querySelector('.low1').textContent =  data.days[0].tempmin;

    document.querySelector('.high2').textContent =  data.days[1].tempmax;
    document.querySelector('.low2').textContent =  data.days[1].tempmin;


    document.querySelector('.high3').textContent =  data.days[1].tempmax;
    document.querySelector('.low3').textContent =  data.days[1].tempmin;



    //windchill information here
  };
getWeather();


