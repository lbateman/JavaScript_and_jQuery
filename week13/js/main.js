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
    sideNav = document.getElementById('SideNav')
;

function getAuthorAndYearString(authorName) {
  // I originally had this taking an index value and looking it up in the array; wasn't sure what "one data item" meant
  // Learned that I only need to return the string, and not "...innerHTML = ..."
  return '<p>This speech was written by ' + authorName.author + ' in ' + authorName.year + '.</p>';
}

function displayBCEString(bool) {
  if (bool === true) {
    return '<p>This speech took place before the common era.</p>';
  } else {
    return '<p>This speech took place during the common era.</p>'
  }
}

function getOldestOrYoungestString(speech) {
    var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

    if(speech.year < oldest){
      return '<p>This is the oldest speech on the page.</p>';
    } else if(speech.year > newest){
      return '<p>This is the most recent speech on the page.</p>';
    } else {
      return '';
    }
}

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