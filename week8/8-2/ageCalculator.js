// This script takes an input from the user, uses it to calculate the user's current age,
// and replaces the existing div text on the page with a statement about the user's age.
// If the user was born in 1968, the function also prints an Easter egg to the div.

var
	ageCalc, // function to calculate the user's age
	ageDiv = document.getElementById("ageDiv"), // create a shortcut for the target div in the DOM
	year 	// variable to hold the user's birth year
;

/* Problematic form-based function; would appreciate help!
function ageCalc() {
	var age = 0, currentYear = 2015;
	var birthYear = document.getElementById("birthYear").value;
	console.log(birthYear);
	age = currentYear - birthYear;
	ageDiv.innerHTML = "You are " + currentAge + " this year.";
	ageDiv.style.color = "#" + 000;
} */

// take a year and calculate its difference from the current year to get the user's current age,
// then print the result to the div in the page and change the color of the div.
// Add Easter egg if appropriate.
// NOTE: The year is hard-coded to 2015.
function ageCalc(birthYear) {
	var currentYear = 2015;
	var currentAge = currentYear - birthYear;
	ageDiv.innerHTML = "You are " + currentAge + " this year.";
	ageDiv.style.color = "#000";
	if(birthYear == 1968) {			// using == here because it didn't work with ===
		ageDiv.innerHTML += "<br>Wow, you're about the same age as Leah!";
	}
}

// set the initial div color to something light, ask the user for their birth year, and call the function to calculate the user's age
ageDiv.style.color = "#999";
year = window.prompt("What year were you born in?"); // not bothering with error checking for this assignment
ageCalc(year);