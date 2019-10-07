let element = document.querySelector("button");

function turnButtonRed (){
  
  /*
  7.0 
  Modify the body of the turnButtonRed() function so that it modifies the button as follows:

    - Assigns the .style.backgroundColor to 'red'
   -  Assigns the style.color to 'white'
   -  Modifies the .innerHTML to 'Red Button'
  */
	element.style.backgroundColor = 'red';
  element.style.color = 'white';
  element.innerHTML = 'Red Button';
}

element.onclick = turnButtonRed;
