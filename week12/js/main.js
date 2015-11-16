// set up an array variable and set it to contain the list of recipes
var recipeArray = $("#recipes").children();

function showRecipe(recipeNum) {
	// use the recipeNum index based on the clicked li's index to pick out the corresponding recipe and put it into a variable
	var current = recipeArray[recipeNum];

	// swap around the classes using class selectors and the variable we just created that contains the selected recipe
	$(".previous").removeClass("previous");
	$(".current").addClass("previous");
	$(".current").removeClass("current");
	$(current).addClass("current");

	// fade out the currently displayed recipe, fade in the selected recipe
	$(".previous").slideUp("slow");
	$(".current").fadeIn(3000);
};

$(document).ready(function() {
	// constrain the width of the div
	$("#recipes").children().css("width", "600px");

	// set everything but the currently displayed recipe to not show
	$("#recipes div:not(.current)").css("display", "none");

	// set the CSS for the current nav item -- got the inspiration for this from Anthony, but not the code :)
	$("#nav1").css({color: "#fff", backgroundColor: "#0000ff" });

	// function to run when a nav-li is clicked
	$(".nav-li").click(function() {
		// set the text and background color of the clicked nav-li and unclicked nav-lis -- inspiration from Anthony
		$(this).css( {color: "#fff", backgroundColor: "#0000ff" });
		$(this).siblings().css( { color: "#000", backgroundColor: "#fff"});

		// next line from http://stackoverflow.com/questions/1476516/how-to-pass-a-jquery-object-to-function
		// get the index of the clicked nav-li
		var i = $(this).index();
		// pass the clicked nav-li's index to the showRecipe function
		showRecipe(i);
	});

	$(document).keypress(function() {
		$(".current h2").animate({ borderWidth: "+=2"} );
	});

	$("#recipes").mouseenter(function () {
		$(".current").animate({ marginLeft: "+=10"}, 1000);
	});
});

/*	Response, using jQuery, to at least two different user interaction events -- click, keypress, mouseenter
	At least one fade animation -- selected recipe fades in
	At least one position animation -- not exactly sure what this means, but previous recipe slides up, and recipe div moves right on mouseEnter
	At least one implementation of the jQuery animate() function -- border of recipe title increases on keypress */