$(document).ready(function(){
	// Add the attached icon image before the text in each LI element in the main navigation
	$("#menu ul li a").prepend("<img src='icon.png'>&nbsp;");

	// Clicking on the H1 element in the header changes the background color of the header DIV
	$("#header h1").click(function(){
		$("#header").toggleClass("clickedHeader");
	});

	// Change the text color of the first LI element in one of the sub-lists in the sidebar
	// Thanks to the jQuery API doc for the color inspiration
	$("#sidebar_content_1 ul li:first-child a").css("color", "#0769ad");

	// Move the position of the even “numbered” LI elements in one of the sub-lists in the sidebar to the right by 5 pixels
	// I'm using "human even" rather than "computer even"
	$("#sidebar_content_1 ul li:odd").css("padding-left", "5px");

	// Clicking on one of the post titles in the main content area replaces the content of the content DIV (with the ID of “content”) with content you specify
	$("#content h2.title").click(function(){
		$("div#content").html("<h1>Welcome to the wonderful world of jQuery!</h1>")
	});

	// Liz said this way was harder, so I thought I'd try it, but it didn't seem any worse
	// $("#content h2.title").click(function(){
	// 	$(this).siblings().html("<p>Welcome to the wonderful world of jQuery!</p>")
	// });

	// Clicking on one of the H2 elements in the sidebar toggles visibility of the list below it
	// This assumes the h2 only has one sibling, as it does in this HTML file;
	// otherwise you'd have to use next() or some other selector
	$("#sidebar-content h2").click(function(){
		$(this).siblings().toggle();
	});
});

