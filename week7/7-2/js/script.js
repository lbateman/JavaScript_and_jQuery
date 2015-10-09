// Set up a variable to hold the poor victim of my nefarious CSS tweaks and save me some typing
var victimDiv = document.getElementById("pagewrap");

// Set up an onClick handler to toggle between the good and bad UX states
// If the user clicks on the div...
victimDiv.onclick = function() {
	// and if the div has no class applied to it...
	if (victimDiv.className === "") {
		// then apply the class with the unfortunate CSS styles;
		victimDiv.setAttribute("class", "bad");
	// and if the div does have a class applied to it, ...
	} else {
		// clear that class.
		victimDiv.setAttribute("class", "");
	}
}

// Now pass in some transitions to further bad-UXify things
victimDiv.style.transition = "color 2s, background-color 5s";
