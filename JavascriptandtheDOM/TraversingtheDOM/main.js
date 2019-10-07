// 8.0 - Traversing the DOM

/*
8.1
Access the .firstChild of the body and save it to a variable named first. Modify its .innerHTML to say ‘I am the child!’ Take a moment to note which element has now been modified.
*/
let first = document.body.firstChild;

first.innerHTML = 'I am the child!';