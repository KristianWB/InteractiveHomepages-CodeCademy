// 5.0 - Create and Insert Elements

/*
5.0

  a) Create a li element in the document and save it to a variable.
    
  b) Assign the new element an id of "oaxaca" by using the .id property			on the new variable.
  
  c) Assign the element the text “Oaxaca, Mexico” by using the							.innerHTML method.
*/
let listTag = document.createElement("li");
listTag.innerHTML = "Oaxaca, Mexico";

/*
5.2
Append the new element you created as the last child of the list with the ID more-destinations. Scroll to the bottom of the page in the browser to see your new element.
*/
document.getElementById("more-destinations").appendChild(listTag)
