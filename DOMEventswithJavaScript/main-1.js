// Add the code you want to test below:
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

//#4.1 - creating function
let textChange = function() {
  view.innerHTML = 'Hello, World!';
};

//#4.2 - crating function
let textReturn = function () {
  view.innerHTML = 'View';
}

view.onclick = open;
close.onclick = hide;

//#4.3 - creating event handler event
view.addEventListener('click', textChange);

//#4.4 - creating the close event handler event
close.addEventListener('click', textReturn);

// Write your code here
