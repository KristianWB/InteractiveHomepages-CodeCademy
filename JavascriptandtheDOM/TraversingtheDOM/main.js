// 8.0 - Traversing the DOM

/*
8.1
Access the .firstChild of the body and save it to a variable named first. Modify its .innerHTML to say ‘I am the child!’ Take a moment to note which element has now been modified.
*/
let first = document.body.firstChild;

first.innerHTML = 'I am the child!';

/*
8.2
Use the .parentNode property to access the parent element of the variable first and modify its .innerHTML to say ‘I am the parent and my inner HTML has been replaced!’ Take a moment to notice the change in the web page. 
*/
first.parentNode.innerHTML = 'I am the parent and my inner HTML has been replaced!';