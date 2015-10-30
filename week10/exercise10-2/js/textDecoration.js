// I have no idea how I did this, but all code is mine. (At one point I was appending "(v)(v)(v)(v)" to each target restaurant!)

$("document").ready(function() {
	var veg = $("[data-type = 'veg']"); // I'm guessing this line returns a jQuery object, veg, containing the relevant DOM elements
										// The selector finds all elements that have a data-type attribute whose value is "veg"
	veg.append(" (v)"); // And this line appends the desired text to each element in the jQuery object
});