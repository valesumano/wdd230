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



let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').innerHTML = '&copy;' + year;

let currentdate = document.lastModified;
console.log(currentdate);

document.querySelector('.updated').textContent = currentdate;


//Banner

// let fulldate = new Date();


// let weekday =date.getDay();
// if (weekday == 1|| weekday == 7){
//     show.innerHTML= `<p>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</p>`;
// }




// var weekday = new Array(7)

// weekday[0] = "spectacular Sunday"
// weekday[1] = "marvelous Monday"
// weekday[2] = "terrific Tuesday"
// weekday[3] = "wonderful Wednesday"
// weekday[4] = "totally cool Thursday"
// weekday[5] = "fantastic Friday"
// weekday[6] = "sweet Saturday"

// var currentDate = new Date()
// weekdayValue = currentDate.getDay()

// document.write(
//     '<p>Have a ' + weekday[weekdayValue] + '!</p>'
//   )

