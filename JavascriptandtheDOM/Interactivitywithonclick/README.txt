Javascript and the DOM
Interactivity with onclick

You can add interactivity to DOM elements by assigning a function to run based on an event.

Events can include anything from a click to a user mousing over an element.

The .onclick property allows you to assign a function to run on a click event on an element:

let element = document.getElementById('interact');
element.onclick = function() { element.style.backgroundColor = 'blue' };

