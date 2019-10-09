#2 - "Firing" Events

After a specific event fires on a specific element in the document object model (or DOM), an event handler function can be created to run as a response. In this lesson, we will learn about event handler functions that modify and update DOM elements after an event fires.

Let’s compare this to something more familiar: a cuckoo clock is an example of programming with events! When the clock hands strike a new hour, the cuckoo bird responds with a whistle for each hour. For example, the cuckoo bird will whistle twice when the clock strikes 2 o’clock.

As you can see in the diagram, the clock striking an hour is the specific event that causes a specific response from the cuckoo bird. Event handler functions wait for their specific events to fire like the cuckoo bird in the clock awaiting the next hour. These functions can be used to change a DOM element’s color, text and much more!

Most events in the browser take place without being noticed — the events are undetected because there is no event handler associated with the event to execute an action. Event handlers are crucial for creating interactive websites with JavaScript.
---------------------------------------------------------------------------------------------------------------------------------------------------------------
#3 - Event Handler Registration

You’re doing great! Now it’s time to dive into using event handler functions to create interactivity.

JavaScript interprets registered events as event objects with properties and methods. When you create an event handler function on a specific event, you create a property of the event object.

An event handler function is registered as a property attached to the DOM element being interacted with, or the event target. Check out the syntax:

let eventTarget = document.getElementById('targetElement');

eventTarget.onclick = function() {
  // this block of code will run
}

Let’s break this down!

    First, we accessed the DOM element that serves as the event target by its ID using document.getElementById('targetElement').
    Then we created the event handler property which consists of the event target followed by the event name (the prefix on- and the event type.) In this example, we’re using the click event which fires when the user presses and releases a mouse button on a DOM element.
    Lastly, we assigned an event handler function to the property.

Event handlers can also be registered as an HTML element attribute, but you should always avoid inline JavaScript code in HTML files!
--------------------------------------------------------------------------------------------------------------------------------------------------
#4 - Adding Event Handlers

It’s best practice to create named event handler functions, instead of anonymous functions. Your code will remain organized and reusable this way, even if your code gets complex. Check out the syntax:

let eventHandlerFunction = function() {
  // this block of code will run
}

eventTarget.onclick = eventHandlerFunction;

The .addEventListener() method is another common syntax for registering event handlers. An event listener waits for a specific event to occur and calls a named event handler function to respond to it. This method requires two arguments:

    The event type as a string
    The event handler function

Check out the syntax of an .addEventListener() method with a click event:

eventTarget.addEventListener('click', eventHandlerFunction);

You’ll want to use the .addEventListener() method to allow multiple event handlers to be registered to a single event without changing its other event handlers.
------------------------------------------------------------------------------------------------------------------------------------------------------------------
#5 - Removing Event Handlers

The .removeEventListener() method is used to reverse the .addEventListener() method. This method stops the code from “listening” for an event to fire when it no longer needs to. .removeEventListener also passes two arguments:

    The event type as a string
    The event handler function

Check out the syntax of a .removeEventListener() method with a click event:

eventTarget.removeEventListener('click', eventHandlerFunction);

Because this method unregisters event handlers, it needs to identify which function to remove from the event. The event handler function passed to the .removeEventListener() method must be the same function of the corresponding .addEventListener().
Instructions
1.

This digital restaurant needs your help because the lock on the door is broken! Click on the lock and unlock elements and you will see that people are able to get in even when the restaurant is closed. They need you to use .removeEventListener() to keep the door locked.

First, you must add an event listener to the lock element when a click event is fired with an anonymous function.

Inside the function, add a .removeEventListener() to turn off the openDoor function when a user tries to click the door element. Then run your code and fire the event to test out your event handlers.
------------------------------------------------------------------------------------------------------------------------------------------------------
#6 - Event Object Properties

JavaScript stores events as event objects with their related data and functionality as properties and methods. There are pre-determined properties associated with event objects. You can call these properties to see information about the event, for example:

    the .target property to access the element that triggered the event.
    the .type property to access the name of the event.
    the .timeStamp property to access the number of milliseconds that passed since the document loaded and the event was triggered.
    -------------------------------------------------------------------------------------------------------------------------------------------------------

