// This script creates a table of contents from a set of <h2> elements using jQuery
// all code is rather painfully mine unless otherwise indicated. sorry for any blood on your screen...

$("document").ready(function() {

	var tocHeads = []
	;

	// populate the array with the h2s for the table of contents
	// many thanks to the people at http://stackoverflow.com/questions/7518086/jquery-html-of-all-elements for this solution
	// (I added in the HTML tags, after much trial and error)
	// this function iterates over each h2 in .content and pushes the html of the current h2 into the array
	$(".content h2").each(function() {
		tocHeads.push("<a class='toc'><li>" + $(this).html() + "</li></a>");
	});

	// this function inserts the contents of the array into the page and wraps it in an unordered list
	function createContent() {
		$("h1").after(tocHeads);
		$(".toc").wrapAll("<ul />");
	}

	createContent();

	// wrap each of the h2 tags in an <a> tag with class "anchor"
	$(".content h2").wrap("<a class='anchor'/>");

	// insert an id into the <a>s with class .anchor
	// i'm sure there's a more efficient way to do this, but i can't think of it tonight
	$("h2").each(function() {
		if ($(this).text().indexOf("San Francisco") != -1) {
			$(this).parent().attr("name","sanfrancisco");
		} else if ($(this).text().indexOf("London") != -1) {
			$(this).parent().attr("name","london");
		} else if ($(this).text().indexOf("Hong Kong") != -1) {
			$(this).parent().attr("name","hongkong");
		} else if ($(this).text().indexOf("Paris") != -1) {
			$(this).parent().attr("name","paris");
		}
	});

	// insert an href into the <a>s with class .toc
	// ditto about efficiency
	$(".toc").each(function() {
		if ($(this).text().indexOf("San Francisco") != -1) {
			$(this).attr("href","#sanfrancisco");
		} else if ($(this).text().indexOf("London") != -1) {
			$(this).attr("href","#london");
		} else if ($(this).text().indexOf("Hong Kong") != -1) {
			$(this).attr("href","#hongkong");
		} else if ($(this).text().indexOf("Paris") != -1) {
			$(this).attr("href","#paris");
		}
	});

	// remove underlines from <a>s
	$("a").css("text-decoration", "none");
});