// 1.0 - project start - Getting Started - Get a Door, Open a Door!

/*
1.7
Navigate to the script.js file. Create a global variable called doorImage1. Use a JavaScript DOM method to assign this global variable to the HTML element with the id of door1.
*/
const doorImage1 = document.getElementById('door1');

/*
1.15
Now you have three doors and the cursor changes on hover for all three; but only your first door opens. Put JavaScript to work to open those other two doors!

Go to your script.js file and create two new global variables called doorImage2 and doorImage3. Use a JavaScript DOM method to assign these global variables to the HTML elements with the id of door2 and door3 respectively.

*/
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"

  // #38
let numClosedDoors = 3;

// #40
let openDoor1;
let openDoor2;
let openDoor3;

//#55 - startButton
const startButton = document.getElementById('start');

//#58 - isBot() function
const isBot= (door) => {
  if(door.src=== botDoorPath){
    return true;
  } else return false;
}

//#50 - isClicked()
const isClicked = (door) =>{
  //#51 + 52
  if (door.src=== closedDoorPath) {
    return false;
  } else {
    return true;
  }  
}

//#46
const playDoor = () => {
  //#47
  numClosedDoors--;
  startButton.innerHTML = numClosedDoors;
  //#48
  if (numClosedDoors === 0){
    gameOver('win');
  }
}

/*
#37
Your game is beginning to look like a game thanks to your HTML structure & CSS manipulations; but what good is a game if you know where the ChoreBot is always hiding? JavaScript will help solve this problem by helping you randomly generate the door that hides the ChoreBot.

In your script.js file, beneath your global variables, create a randomChoreDoorGenerator() function using arrow function syntax.
*/
const randomChoreDoorGenerator = () => {
  //#39
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  //#41
  if(choreDoor === 0){
    //#42
    openDoor1 = botDoorPath    
  } else if(choreDoor === 1){
    openDoor2 = beachDoorPath
  } else{
    openDoor3 = spaceDoorPath
  }
}

/*
1.7
Be mindful to change the logic if you decide to copy and paste the logic from the doorImage1.onclick() function - or else you’ll have three ChoreBots!

To prevent this from happening, first create a global variable called beachDoorPath and assign this URL string as its value:

https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg

*/
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
/*

1.8
Next, create another global variable called spaceDoorPath and assign this URL string as its value:

https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg
*/
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"

/*
1.8
Inside the script.js file, underneath your global variable, assign doorImage1.onclick to a new, empty arrow function.

This function will run whenever the first door image element is clicked.
*/

/*
1.10
Next, within your doorImage1.onclick arrow function, change the src of doorImage1 to the value of botDoorPath.

Refresh the page. Now when you click on the door, watch as the closed door image changes to the ChoreBot ready to greet you with housework!

*/
doorImage1.onclick = () => {
  if(!isClicked(doorImage1)){
  	doorImage1.src = openDoor1;
 		playDoor();
  }
};
/*
1.16
Under your doorImage1.onclick() arrow function, give doorImage2 and doorImage3 each their own .onclick() arrow functions. These functions will be empty for now.
*/
doorImage2.onclick = () => {
  
    
/*
1.19
Now within the empty .onclick() functions of doorImage2 and doorImage3, write code so that doorImage2 will change to the beach image and doorImage3 will change to the space image when clicked.

Now when you refresh the page, click on each door and witness how each closed door opens to something different: a ChoreBot, a beach, and outer space.
*/
  if(!isClicked(doorImage2)){
    doorImage2.src = openDoor2
  	playDoor();
  }
};
doorImage3.onclick = () =>{
  if(!isClicked(doorImage3)){
  	doorImage3.src = openDoor3
  	playDoor();
  }
};

//#54 - gameOverFunction
const gameOver = (status) => {
  //#56
  if(status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  }
}

//#45
randomChoreDoorGenerator()