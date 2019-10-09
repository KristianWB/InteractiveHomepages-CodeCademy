// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function that will creates color codes for the randomColor variable
function rgb(num) {
  return Math.floor(Math.random() * num);
}

// Write your code below
let colorChange = function (event) {
  //#7.1 - use colorChange function
  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor = randomColor;
}
//#7.3 - eventHandler onclick with eventhandler function
button.onclick = colorChange;

//#7.4 - event on mysterybutton with eventhandler
mysteryButton.onwheel = colorChange;