



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

let totalCarbs = 0;
let totalProtein = 0;
let totalFat = 0;
let totalSugar = 0;
let totalCalories = 0;
let numDrinks = localStorage.getItem("numDrinks") || 0;

fetch('https://andejuli.github.io/wdd230/fruit.json')
  .then(response => response.json())

function submitForm(event) {
  event.preventDefault();

  numDrinks++;

  const eachCheckbox = document.getElementsByName("checkbox");
  let allMarkedBoxes = [];
  for (let i = 0; i < eachCheckbox.length; i++) {
    const checkbox = eachCheckbox[i];
    if (checkbox.checked) {
      allMarkedBoxes.push(checkbox.value);
      switch (checkbox.value) {
        case fruit1.name:
          totalCarbs += fruit1.nutritions.carbohydrates;
          totalProtein += fruit1.nutritions.protein;
          totalFat += fruit1.nutritions.fat;
          totalSugar += fruit1.nutritions.sugar;
          totalCalories += fruit1.nutritions.calories;
          break;
        case fruit2.name:
          totalCarbs += fruit2.nutritions.carbohydrates;
          totalProtein += fruit2.nutritions.protein;
          totalFat += fruit2.nutritions.fat;
          totalSugar += fruit2.nutritions.sugar;
          totalCalories += fruit2.nutritions.calories;
          break;
        case fruit3.name:
          totalCarbs += fruit3.nutritions.carbohydrates;
          totalProtein += fruit3.nutritions.protein;
          totalFat += fruit3.nutritions.fat;
          totalSugar += fruit3.nutritions.sugar;
          totalCalories += fruit3.nutritions.calories;
          break;
        default:
          break;
      }
    }
  }

  const outputDiv = document.querySelector(".summary");
  outputDiv.innerHTML = `
    <br>
    <h2>Form Values:</h2>
    <hr>
    <p>First Name: ${event.target.elements.fname.value}</p>
    <p>Email: ${event.target.elements.email.value}</p>
    <p>Phone Number: ${event.target.elements.phone.value}</p>
    <p>Fruits: ${allMarkedBoxes.join(", ")}</p>
    <p>Special Instructions: ${event.target.elements.instructions.value}</p>
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
      <p>Drink Mixes Ordered: ${numDrinks}</p>
    </i>
  `;

  localStorage.setItem("numDrinks", numDrinks);
}
