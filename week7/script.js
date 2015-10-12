// Unless noted, code is by JavaScript instructor and Leah Bateman, 10/11/2015
// I've looked at several functions in other student's code over the past few weeks,
// most recently Liz Burton's code from week 6, which I looked at about 12 hours before I wrote my function,
// so I may be leveraging some stuff about functions from my memory stores
// (plus see below for concatenation note)

//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible

var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    oldest, // variable to hold the oldest speech on the page
    newest, // variable to hold the newest speech on the page
    index,  // variable to hold the input for my function
    donatePrompt, // variable to hold the donation amount
    h3,     // variable to hold an h3 node 
    h3Text, // variable to hold a text node for the h3 element
    speechInfo; // my brand-new function

// //////////////////////////////////////// Figure out the oldest and newest speeches ////////////////////////////////////////

// We only need to do this once, not for each speech
// I'm guessing it's more efficient to do it once, but I'm not sure
// Anyway, it makes the code shorter

oldest = speechesArray[0].year;
newest = speechesArray[0].year;

for(var i = 0; i < speechesArray.length; i++){
  if(speechesArray[i].year < oldest){
    oldest = speechesArray[i].year;
  }
  if(speechesArray[i].year > newest){
    newest = speechesArray[i].year;
  }
}

// //////////////////////////////////////// Print out info about a particular speech ////////////////////////////////////////

// I can't take it any more! Must... write... function!
// Putting it up here so it's available to be called by the event handlers
// This function takes a variable index, pulls information from the array for that index, and prints information to the page

speechInfo = function(index) {
  // I tried to concatenate the pieces when I first wrote the code, and for some reason it didn't work,
  // but I looked at Lisa's code and it worked for her, so I tried again (and it does work this time)
  document.getElementById("ConsoleDisplay").innerHTML = 'This speech was written by ' + speechesArray[index].author + ' in ' + speechesArray[index].year + '.'

  if(speechesArray[index].yearIsBCE === true){
    document.getElementById("ConsoleDisplay").innerHTML += '<br>This speech took place before the common era.';
  }else{
    document.getElementById("ConsoleDisplay").innerHTML += '<br>This speech took place during the common era.';
  }

  if(speechesArray[index].year === oldest){
    document.getElementById("ConsoleDisplay").innerHTML += '<br>This is the oldest speech on the page.';
  }
  if(speechesArray[index].year === newest){
    document.getElementById("ConsoleDisplay").innerHTML += '<br>This is the most recent speech on the page.';
  }
}

// //////////////////////////////////////// Event Handler for Donate Button ////////////////////////////////////////

// When the Donate button is clicked, this function compares the input to one of five conditions --
// null (Cancel button), empty (no input + OK button), a number < 100, a number >= 100, and anything else --
// and takes the appropriate action
// (I tried to remove any previous h3s before writing the latest donation to the screen, but couldn't figure it out)

document.getElementById('BtnDonate').addEventListener('click', function(){
  // Code in here executes when the user clicks the "Donate" button.
  // Get some input from the user
  donatePrompt = window.prompt("How much would you like to donate?");
  // Let's put in some error handling here
  // First check that input is not null (Cancel button), because that's treated as a number
  if (donatePrompt !== null) {
    // Empty input is also treated as a number, so check for that...
    if (donatePrompt === "") {
      h3 = document.createElement("h3");
      h3Text = document.createTextNode("Sorry, but you haven't entered anything. Please try again.");
      h3.appendChild(h3Text);
      document.getElementById("SideNav").appendChild(h3);
    // And if input is not null and is less than 100...
    } else if (donatePrompt < 100) {
        // Create the h3 and text nodes and attach them to the right places
        h3 = document.createElement("h3");
        h3Text = document.createTextNode("Thank you for your donation of $" + donatePrompt + ".");
        h3.appendChild(h3Text);
        document.getElementById("SideNav").appendChild(h3);
    // Or if input is not null and greater than 100... 
    } else if (donatePrompt >= 100) {
        h3 = document.createElement("h3");
        h3Text = document.createTextNode("Thank you for your very generous donation!");
        h3.appendChild(h3Text);
        document.getElementById("SideNav").appendChild(h3);
        // For this case, also set the h3 text color to red...
        h3.setAttribute("style", "color: #DB152C");
        // And change the classes of the article elements
        // (Presumably nothing except the title changes because the styles of the other elements are controlled by more specific CSS selectors)
        // Get all the article elements, which are collected into an array
        articles = document.getElementsByTagName("article");
        // Loop through the array of articles...
        for (i = 0; i < articles.length; i++) {
          // And add a class to each article
          articles[i].className = "generous-donation";
        }
    // Or if the user didn't input a number, show an error message
    } else {
      h3 = document.createElement("h3");
      h3Text = document.createTextNode("Sorry, but that doesn't seem to be a number. Please try again.");
      h3.appendChild(h3Text);
      document.getElementById("SideNav").appendChild(h3);
    }
  }
});

// //////////////////////////////////////// Event Handlers for Speech Buttons ////////////////////////////////////////

// These event handlers go through the array until they find the appropriate index value,
// then pass that index value to the speechInfo function defined above

document.getElementById('BtnChurchill').addEventListener('click', function(){
  // Code in here executes when the user clicks the "Churchill" button.
  // I started off by hardcoding this to speechInfo(0), but then realized we have no idea how long the array could get
  // So I wrote some code to loop through the array, find the author we want, and call speechInfo with the array index
  // (I originally had to put a break in, but switching from author = Churchill to author === Churchill fixed that!)
  // (Though it seems if the array is huge, breaking out might make the code run faster)
  // (Presumably if the array were really long, we could use variables to write one event listener to cover all buttons.
  // And another loop to actually create the buttons if needed.)
  // Loop through the array
  for (i = 0; i < speechesArray.length; i++) {
    // Check whether we've reached our author
    if (speechesArray[i].author === "Churchill") {
      // If we have, call speechInfo with the current array index
      speechInfo(i);
    }
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  // Code in here executes when the user clicks the "Ghandi" button.
  // Isn't this so nice and short now? :)
  for (i = 0; i < speechesArray.length; i++) {
    if (speechesArray[i].author === "Ghandi") { 
      speechInfo(i);
    }
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  // Code in here executes when the user clicks the "Demosthenes" button.
  for (i = 0; i < speechesArray.length; i++) {
    if (speechesArray[i].author === "Demosthenes") {
      speechInfo(i);
      break;
    }
  }
});