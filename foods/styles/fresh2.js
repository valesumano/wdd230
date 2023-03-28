



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

    // select the output container element
  
    data.forEach(() => {
      // Create elements to add to the div.cards element
    //   let card = document.createElement('p');
    
      // Build the h2 content out to show the prophet's full name - finish the template string
    //   card.textContent = `${data.name}`;


    //   cards.appendChild(card);
    })
  }


// const fruitsJSON = 'https://andejuli.github.io/wdd230/fruit.json'

// // Get the select element
// const selectElement = document.getElementById("fruit1");

// // Fetch the fruit options from the JSON file
// fetch("https://andejuli.github.io/wdd230/fruit.json")
//   .then(response => response.json())
//   .then(data => {
//     inputElements.forEach(inputElement => {
//         // Set up the autocomplete functionality
//         new autoComplete({
//           selector: inputElement,
//           data: {
//             src: data.fruit,
//           },
//         });
//       });
//     });
    
    
    
    // Loop through the fruit options and add them to the select element
//     data.name.forEach(fruit => {
//       const optionElement = document.createElement("option");
//       optionElement.value = fruit;
//       optionElement.text = fruit;
//       selectElement.appendChild(optionElement);
//     });
//   });


