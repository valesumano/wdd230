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

//Date on top

document.querySelector('.date').innerHTML = date;

const realDayofWeek = d.getDay();

//Banner
const banner = document.getElementById('banner');

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


//storage local and session

localStorage.setItem('name', 'Valentina Sumano - Permanent');
sessionStorage.setItem('class', 'WDD230 - not permanent');








