Javascript and the DOM
Select and Modify Elements

In the previous exercise, we accessed the webpage elements with the document keyword!

What if we wanted to select a specific element? The DOM interface allows us to access
 a specific element with CSS selectors. CSS selectors define the elements to which a 
 set of CSS rules apply, but we can also use these same selectors to access DOM elements
  with our script! Selectors can include the name of the tag, a class, or an ID.

The .querySelector() method allows us to specify a CSS selector and then returns the first 
element that matches that selector. The following code would return the first paragraph in the document.
