// let's just declare all these variables globally
var printToScreen,     // a function that creates nodes and appends them appropriately
    newElement,       // a new element
    newElementText,   // a text node for the new element
    multiply,         // a function that multiplies two numbers
    index,            // the first parameter for the function
    multiplier,       // the second parameter for the function
    product,          // a variable to hold the result of multiplying the two function parameters
    multiplierPrompt, // a variable to hold the user's input
    i,                // a counter for the loop
    message;          // a message to print to the screen

// this function takes a string and a font size, creates element and text nodes, appends them appropriately, and sets the element's font size
function printToScreen(string, size) {
  // create the element and text nodes
  newElement = document.createElement("p");
  newElementText = document.createTextNode(string);
  // append the element and text nodoes to the appropriate parent nodes
  newElement.appendChild(newElementText);
  document.getElementById("heading").appendChild(newElement);
  // mess about with the styles a bit; does a newly-created child element inherit its parent's styling?
  newElement.style.fontSize = size + "px";
  newElement.style.fontWeight = "normal";
}

// this function takes two parameters, multiplies them together, and sends the result and a font size to the printToScreen function
function multiply(index, multiplier) {
  // get the product of the two parameters
  product = index * multiplier;
  // call a function to print them to the screen
  // (sadly, it only prints the result and not the "x * y =" part of it because i don't know how to do that)
  printToScreen(product, 20);
}

// get some input from the user (i'm not going to worry about error checking here)
multiplierPrompt = window.prompt("What number would you like to see the times table for?");
// run the function twelve times
// what I learned: the ending condition probably shouldn't have an = in it :(
for (i = 1; i < 13; i++) {
    multiply(i, multiplierPrompt);
}

// print a final message
var message = "How fast can you memorize this times table?";
printToScreen(message, 25);