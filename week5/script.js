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
	user = window.prompt("Hello! What is your name?"), // Prompt for the user's name when page loads
	favoriteAuthor = ""; // As suggested, go ahead and declare this variable, even though we don't have a value yet

// //////////////////////////////////////// Code that executes when the page loads ////////////////////////////////////////
	
// Greet the user based on what they entered in the prompt
// if (user !== null && user.length > 0) { This was my first attempt, which I finally got working... and then I read the instructions again :)
if (typeof user === "string" && user !== "") {	// But aren't they all strings?
		console.log("Hi, " + user +"!"); 
}
// Otherwise, call them User
else console.log("OK, I'll just call you User."); 

// //////////////////////////////////////// Code that executes when an event occurs ////////////////////////////////////////

// Code for Donate button -- get the user's favorite author and say how old he was at the time of the speech
document.getElementById('BtnDonate').addEventListener('click', function(){
  favoriteAuthor = window.prompt("Which of these authors is your favorite?");
  switch (favoriteAuthor) {
	case "Churchill" :
		console.log(churchillSpeech.author + " was " + churchillSpeech.authorAge + " when he gave the speech on this page.");
	break;
	
	case "Ghandi" :
		console.log(ghandiSpeech.author + " was " + ghandiSpeech.authorAge + " when he gave the speech on this page.");
	break;
	
	case "Demosthenes" :
		console.log(demosthenesSpeech.author + " was " + demosthenesSpeech.authorAge + " when he gave the speech on this page.");
	break;
	
	default : // Also takes care of empty string and Cancel cases
		console.log("Sorry, but I don't recognize that author. Click the Donate button to try again.");
	break;
  }
});

// Code for Churchill button
// Give info about the year of the speech, check whether the year was BCE, and check whether the speech is the oldest or most recent on the page
document.getElementById('BtnChurchill').addEventListener('click', function(){

  // Give info about the year of the speech
  console.log("This speech was written by " + churchillSpeech.author + " in " + churchillSpeech.year + ".");

  // Check whether the speech was written before the Common Era or not
  // (For some reason I get an error if I don't put in the "=== true" in the first line)
  // if....								then...															else...
  (churchillSpeech.yearIsBCE === true) ? console.log("This speech took place before the common era.") : console.log("This speech took place during the common era.");

  // Check whether the speech is the most recent, the oldest, or neither
  // Check for most recent...
  if (churchillSpeech.year > ghandiSpeech.year && ChurchillSpeech.year > demosthenesSpeech.year) { 
	  console.log("This is the most recent speech on the page.");
  }
  // Check for oldest...
  else if (churchillSpeech.year < ghandiSpeech.year && churchillSpeech.year < demosthenesSpeech.year) { 
	  console.log("This is the oldest speech on the page.");
  }
  // Remaining case(s)
  else console.log("This speech is neither the oldest nor the most recent speech on the page.");
});

// Code for Ghandi button -- pretty much a duplicate of the Churchill code, with the names changed appropriately
document.getElementById('BtnGhandi').addEventListener('click', function(){
  console.log("This speech was written by " + ghandiSpeech.author + " in " + ghandiSpeech.year + ".");
  (ghandiSpeech.yearIsBCE === true) ? console.log("This speech took place before the common era.") : console.log("This speech took place during the common era.");
  if (ghandiSpeech.year > churchillSpeech.year && ghandiSpeech.year > demosthenesSpeech.year) {
	  console.log("This is the most recent speech on the page.");
  }
  else if (ghandiSpeech.year < churchillSpeech.year && ghandiSpeech.year < demosthenesSpeech.year) {
	  console.log("This is the oldest speech on the page.");
  }
  else console.log("This speech is neither the oldest nor the most recent speech on the page.");  
});

// Code for Demosthenes button -- pretty much a duplicate of the Churchill code, with the names changed appropriately
document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  console.log("This speech was written by " + demosthenesSpeech.author + " in " + demosthenesSpeech.year + ".");
  (demosthenesSpeech.yearIsBCE === true) ? console.log("This speech took place before the common era.") : console.log("This speech took place during the common era.");
  if (demosthenesSpeech.year > churchillSpeech.year && demosthenesSpeech.year > ghandiSpeech.year) {
	  console.log("This is the most recent speech on the page.");
  }
  else if (demosthenesSpeech.year < churchillSpeech.year && demosthenesSpeech.year < ghandiSpeech.year) {
	  console.log("This is the oldest speech on the page.");
  }
  else console.log("This speech is neither the oldest nor the most recent speech on the page.");  
});