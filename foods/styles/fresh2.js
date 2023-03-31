



const url = 'https://andejuli.github.io/wdd230/fruit.json';

async function fetFruit() {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data[0].name);  
    displayFruit(data);
  }
  
  fetFruit();

  const displayFruit = (data) => {
    const cards = document.querySelector('#fruit1'); 

    fruit1 = data[Math.floor(Math.random() * 40)]
    fruit2 = data[Math.floor(Math.random() * 40)]
    fruit3 = data[Math.floor(Math.random() * 40)]

    document.getElementById('fruit1').innerText = fruit1.name
    document.getElementById('fruit2').innerText = fruit2.name
    document.getElementById('fruit3').innerText = fruit3.name

  
    data.forEach(() => {

    })
  }



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


//Submition


// Get the form element
const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submitForm', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Get the input values
  const firstName = document.querySelector('#fname').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const fruits = Array.from(document.querySelectorAll('input[name="fruit"]:checked')).map(fruit => fruit.value);
  const instructions = document.querySelector('#instructions').value;
  
  // Get the order date
  const date = new Date();
  const orderDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  
  // Calculate the total nutrition information
  let totalCarbs = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalSugar = 0;
  let totalCalories = 0;
  
  // Loop through the selected fruits and fetch their nutrition data
  fruits.forEach((fruit) => {
    fetch(`https://andejuli.github.io/wdd230/fruit.json`)
      .then(response => response.json())
      .then(data => {
        const selectedFruit = data.find(f => f.name === fruit);
        if (selectedFruit) {
          totalCarbs += selectedFruit.nutritions.carbohydrates;
          totalProtein += selectedFruit.nutritions.protein;
          totalFat += selectedFruit.nutritions.fat;
          totalSugar += selectedFruit.nutritions.sugar;
          totalCalories += selectedFruit.nutritions.calories;
        }
      })
      .then(() => {
        // Update the output area
        const outputArea = document.querySelector('.output-area');
        outputArea.innerHTML = `
          <h2>Form Values:</h2>
          <hr>
          <p>First Name: ${firstName}</p>
          <p>Email: ${email}</p>
          <p>Phone Number: ${phone}</p>
          <p>Fruits: ${fruits.join(', ')}</p>
          <p>Special Instructions: ${instructions}</p>
          <br>
          <h2>Nutrition Information</h2>
          <hr>
          <p>Carbohydrates: ${totalCarbs.toFixed(2)}</p>
          <p>Protein: ${totalProtein.toFixed(2)}</p>
          <p>Fat: ${totalFat.toFixed(2)}</p>
          <p>Sugar: ${totalSugar.toFixed(2)}</p>
          <p>Calories: ${totalCalories.toFixed(2)}</p>
          <br>
          <i>
              <p>Order Date: ${orderDate}</p>
          </i>
        `;
      })

  });
});


