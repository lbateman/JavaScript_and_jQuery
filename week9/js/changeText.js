$(document).ready(function(){
//	$("#changingText")[0].innerHTML = "I'm glad to have you here.";     This also works!
	document.getElementById("changingText").innerHTML = "I'm glad to have you here.";
});

// What I learned:
// You don't need quotes around "document"
// You do need a # in front of the id (and quotes) when using jQuery
// document.getElementById("id") is not exactly the same as $("#id") 