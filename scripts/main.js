let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').innerHTML = '&copy;' + year;

let currentdate = document.lastModified;
console.log(currentdate);

document.querySelector('.updated').textContent = currentdate;