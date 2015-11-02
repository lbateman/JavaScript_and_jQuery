$("document").ready(function() {

	// clicking on an A element applies a CSS class to it that changes its background color
	$("a").click(function() {
		$(this).toggleClass("changeBgColor");
	});

	// clicking on one of the H2 post titles in the main content area hides it
	// .css("visibility","hidden") also works, but leaves a space where the h2 was
	$("#content h2").click(function(e) {
		$(this).toggle();
	});

});