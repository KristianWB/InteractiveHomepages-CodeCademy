// 5.0 - Create and Insert Elements

/*
5.1

  a) Create a li element in the document and save it to a variable.
    
  b) Assign the new element an id of "oaxaca" by using the .id property			on the new variable.
  
  c) Assign the element the text “Oaxaca, Mexico” by using the							.innerHTML method.
*/
let listTag = document.createElement('li');
listTag.id = "oaxaca";
listTag.innerHTML("Oaxaca, Mexico");
