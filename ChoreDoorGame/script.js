// 1.0 - project start - Getting Started - Get a Door, Open a Door!

/*
1.7
Navigate to the script.js file. Create a global variable called doorImage1. Use a JavaScript DOM method to assign this global variable to the HTML element with the id of door1.
*/
let doorImage1 = document.getElementById('door1');
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"

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
door1.onclick = () => {
  doorImage1.src = botDoorPath
};