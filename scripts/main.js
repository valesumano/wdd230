let date = new Date();
let year = date.getFullYear();

document.querySelector('h1').innerHTML = '&copy;' + year + '<h4>test</h4>';

let currentdate = document.lastModified;
console.log(currentdate);

document.querySelector('div').textContent = `Last Updated: ${currentdate}`;