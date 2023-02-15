// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

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




