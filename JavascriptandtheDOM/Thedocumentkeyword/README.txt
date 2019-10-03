Javascript and the DOM


The document keyword

The Document Object Model, abbreviated DOM, is a powerful tree-like structure that organizes the elements on a web page and allows scripting languages to access them. This lesson will focus on some of the most useful methods and properties of the DOM Interface in JavaScript. This interface is implemented by every modern browser.

First things first! The document object in JavaScript is the door to the DOM structure. The document allows you to access the root node of the DOM tree. Before you can access a specific element in the page, first you must access the document structure itself. The document allows scripts to access children of the DOM as properties.

For example, if you wanted to access the <body> element in your script, you could access it as a property of the document by typing document.body. This property will return the body element of that DOM.

Similarly, you could access the <title> element with the .title property. See a comprehensive list of all document properties.