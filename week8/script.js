/* This JavaScript file handles click events for the "Greatest Speeches in History" page.
   Functions:
      getAuthorAndYearString
      displayBCEString
      getOldestOrYoungestString
   Written by the JavaScript instructor and Leah Bateman, with some code leveraged from RJ Goetz
*/

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
    getAuthorAndYearString,
    displayBCEString,
    getOldestOrYoungestString,
    h3,
    sideNav = document.getElementById('SideNav'),
    donatePrompt
;

function getAuthorAndYearString(authorName) {
  // I originally had this taking an index value and looking it up in the array; wasn't sure what "one data item" meant
  // Learned that I only need to return the string, and not "...innerHTML = ..."
  return 'This speech was written by ' + authorName.author + ' in ' + authorName.year + '.<br>';
}

function displayBCEString(bool) {
  if (bool === true) {
    return 'This speech took place before the common era.<br>';
  } else {
    return 'This speech took place during the common era.<br>'
  }
}

function getOldestOrYoungestString(speech) {
    var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

    if(speech.year < oldest){
      return 'This is the oldest speech on the page.<br>';
    } else if(speech.year > newest){
      return 'This is the most recent speech on the page.<br>';
    } else {
      return '';
    }
}

document.getElementById('BtnDonate').addEventListener('click', function(){
  // Code in here executes when the user clicks the "Donate" button.

  // Borrowed this code from RJ
  if (h3) {
    sideNav.removeChild(sideNav.lastChild);
  };

  donatePrompt = window.prompt("How much would you like to donate?");
  // First check that input is not null (Cancel button), because that's treated as a number
  if (donatePrompt !== null) {
    // Empty input is also treated as a number, so check for that...
    if (donatePrompt === "") {
      h3 = document.createElement("h3");
      SideNav.appendChild(h3);
      h3.innerHTML = "Sorry, but you didn't enter anything. Please try again.";
    } else if (donatePrompt < 100) {
      // Create the h3 and text nodes and attach them to the right places
      h3 = document.createElement("h3");
      SideNav.appendChild(h3);
      h3.innerHTML = "Thank you for your donation of $" + donatePrompt + ".";
    } else if (donatePrompt >= 100) {
      h3 = document.createElement("h3");
      SideNav.appendChild(h3);
      h3.innerHTML = "Thank you for your very generous donation!";
      h3.setAttribute("style", "color: #DB152C");
      articles = document.getElementsByTagName("article");
      for (i = 0; i < articles.length; i++) {
        articles[i].className = "generous-donation";
      }
    // Or if the user didn't input a number, show an error message
    } else {
      h3 = document.createElement("h3");
      SideNav.appendChild(h3);
      h3.innerHTML = "Sorry, but that doesn't seem to be a number. Please try again.";
    }
  }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(churchillSpeech);
  document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(churchillSpeech.yearIsBCE);
  document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(churchillSpeech);
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(ghandiSpeech);
  document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(ghandiSpeech.yearIsBCE);
  document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(ghandiSpeech);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(demosthenesSpeech);
  document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(demosthenesSpeech.yearIsBCE);
  document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(demosthenesSpeech);
});