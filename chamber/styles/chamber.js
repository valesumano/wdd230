// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

//Hamburger Menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})


let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').innerHTML = '&copy;' + year;

let currentdate = document.lastModified;
console.log(currentdate);

document.querySelector('.updated').textContent = currentdate;


//Banner

let fulldate = new Date();
let weekday =date.getDay();
if (weekday == 1|| weekday == 2){
    show
}



