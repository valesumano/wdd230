



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




// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// const fruitUrl = 'https://andejuli.github.io/wdd230/fruit.json';
// const fetchPromise = fetch(proxyUrl + fruitUrl)
//   .then(response => response.json())
//   .then(data => {
//     const fruit = data.find(f => f.name === checkbox.value);
//     if (fruit) {
//       // update total nutrition information
//     }
//   })
//   .catch(error => console.log(error));


// function submitForm(event) {
//   event.preventDefault();
//   const date = new Date();
//   const orderDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
//   let numDrinks = localStorage.getItem('numDrinks') || 0;

//   const eachCheckbox = document.getElementsByName('checkbox');
//   const allMarkedBoxes = [];
//   let totalCarbs = 0;
//   let totalProtein = 0;
//   let totalFat = 0;
//   let totalSugar = 0;
//   let totalCalories = 0;

//   const fetchPromises = [];

//   for (const checkbox of eachCheckbox) {
//     if (checkbox.checked) {
//       allMarkedBoxes.push(checkbox.value);
//       const fetchPromise = fetch('https://andejuli.github.io/wdd230/fruit.json')
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then((data) => {
//           const fruit = data.find((f) => f.name === checkbox.value);
//           if (fruit) {
//             totalCarbs += fruit.nutritions.carbohydrates;
//             totalProtein += fruit.nutritions.protein;
//             totalFat += fruit.nutritions.fat;
//             totalSugar += fruit.nutritions.sugar;
//             totalCalories += fruit.nutritions.calories;
//           } else {
//             throw new Error(`Could not find nutrition information for ${checkbox.value}`);
//           }
//         })
//         .catch((error) => {
//           console.error(error);
//           alert(`An error occurred while fetching nutrition information for ${checkbox.value}: ${error.message}`);
//         });
//       fetchPromises.push(fetchPromise);
//     }
//   }

//   Promise.allSettled(fetchPromises).then(() => {
//     document.querySelector('.summary').innerHTML = `
//       <br>
//       <h2>Form Values:</h2>
//       <hr>
//       <p>First Name: ${event.target.elements.fname.value}</p>
//       <p>Email: ${event.target.elements.email.value}</p>
//       <p>Phone Number: ${event.target.elements.phone.value}</p>
//       <p>Fruits: ${allMarkedBoxes.join(', ')}</p>
//       <p>Special Instructions: ${event.target.elements.instructions.value}</p>
//       <br>
//       <h2>Nutrition Information</h2>
//       <hr>
//       <p>Carbohydrates: ${totalCarbs.toFixed(2)}</p>
//       <p>Protein: ${totalProtein.toFixed(2)}</p>
//       <p>Fat: ${totalFat.toFixed(2)}</p>
//       <p>Sugar: ${totalSugar.toFixed(2)}</p>
//       <p>Calories: ${totalCalories.toFixed(2)}</p>
//       <br>
//       <i>
//           <p>Order Date: ${orderDate}</p
//           <p>Drink Mixes Ordered: ${numDrinks}</p>
//           </i>
//         `
//   })
    
//       localStorage.setItem(0, numDrinks);
//     }
