// Original code by Javascript and jQuery instructor; modified by Leah Bateman on 10/4/2015
// (including correcting all the misspellings of "Gandhi" here and in the HTML file -- sorry, couldn't help it. ):

//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    gandhiSpeech = {
      'author': 'Gandhi',
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
    speechesArray = [churchillSpeech, gandhiSpeech, demosthenesSpeech],
    userNamePrompt,
    favoriteSpeechPrompt,
    i = 0,
    favoriteAuthorMistake = true; // Used to check whether the user's favorite author's name is misspelled or otherwise invalid
    oldestYear = speechesArray[0].year,
    mostRecentYear = speechesArray[0].year;

// ////////////////////////////// General code //////////////////////////////

// What I learned here: If you get into an infinite loop, killing the offending tab is usually sufficient
// Also, running this after everything else is dangerous because i has been reset to some completely different value...
// so I need to either use a different variable in my other loops, or put this code first
while(i < speechesArray.length) {
  console.log("This speech is written by " + speechesArray[i].author + ".");
  i++; // For the love of God, don't forget this!!! #codingBeforeCoffee
}

// This code can appear outside the event listeners because we only need to run it once
for (i = 0; i < speechesArray.length; i++) {
  // console.log("i = " + speechesArray[i].author); I put this in for debugging purposes
  if(speechesArray[i].year < oldestYear){
    oldestYear = speechesArray[i].year;
    // console.log(oldestYear); Ditto
  }else if(speechesArray[i].year > mostRecentYear){
    mostRecentYear = speechesArray[i].year;
    // console.log(mostRecentYear); More debugging, but everything checks out here, so the problem must be in the if loops below
  }
} ;

// ////////////////////////////// Code that executes when an event occurs //////////////////////////////

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');

  for (i = 0; i < speechesArray.length; i++) {
    // Tried to use 'if' shorthand here, but couldn't figure out how to use it when there's no 'else' statement
    // After researching it, seems like it's not possible
    if (speechesArray[i].author === favoriteSpeechPrompt) {
      console.log(speechesArray[i].author + " was " + speechesArray[i].authorAge + " during this speech.");
      favoriteAuthorMistake = false;
    }
  }

    // Got to tell the poor misspeller what's going on
    if (favoriteAuthorMistake === true) {
    console.log("Sorry, but that name doesn't match any of the speech authors on this page. Please try again.");
  }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  // Code in here executes when the user clicks the "Churchill" button.
  // Since we're not looping over arrays here and don't need to use arrays,
  // I swapped out all the arrays for objects, as you suggested to other students in Week 5
  console.log('This speech was written by ' + churchillSpeech.author + ' in ' + churchillSpeech.year + ".");

  if(churchillSpeech.yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  // console.log(churchillSpeech.year, oldestYear, mostRecentYear); More debugging
  // Aha, found it! Apparently things don't work right if you use = here instead of === (oops)
  if (churchillSpeech.year === oldestYear) {
    console.log('This is the oldest speech on the page.');
  } 
  else if (churchillSpeech.year === mostRecentYear) {
    console.log('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnGandhi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Gandhi" button.
  console.log('This speech was written by ' + gandhiSpeech.author + ' in ' + gandhiSpeech.year + ".");

  if(gandhiSpeech.yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if (gandhiSpeech.year === oldestYear) {
    console.log('This is the oldest speech on the page.');
  } 
  else if (gandhiSpeech.year === mostRecentYear) {
    console.log('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + demosthenesSpeech.author + ' in ' + demosthenesSpeech.year + ".");

  if(demosthenesSpeech.yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if (demosthenesSpeech.year === oldestYear) {
    console.log('This is the oldest speech on the page.');
  } 
  else if (demosthenesSpeech.year === mostRecentYear) {
    console.log('This is the most recent speech on the page.');
  }
});
