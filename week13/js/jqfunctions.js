var speechArray = $(".main-content").children("article"),
	SideNav = $("#SideNav")
	var donationMsg;

function showSpeech(speechNum) {
	// use the speechNum index based on the clicked button's index to pick out the corresponding speech and put it into a variable
	var current = speechArray[speechNum];

	// swap around the classes using class selectors and the variable we just created that contains the selected speech
	$(".previous").removeClass("previous");
	$(".current").addClass("previous");
	$(".current").removeClass("current");
	$(current).addClass("current");

	// fade out the currently displayed recipe, fade in the selected recipe
	$(".previous").slideUp("slow");
	$(".current").fadeIn(3000);
}

function validateTextNum(input) {
	// regex ganked from http://stackoverflow.com/questions/4702730/regex-for-validating-an-integer-with-a-maximum-length-of-10-characters and modified
	var regExNum = /^[0-9]{1,10}$/;
	// need to have a variable to hold the return value because otherwise the empty fields will return NaN and the function will return false

	var inputValue = parseInt(input, 10);
	// if the text field has non-zero integer, set returnValue to true
	if (regExNum.test(inputValue) === true) {
		return true;
	} else return false;
}

$(document).ready(function () {
	// set up a variable to hold the font size
	// font-size code from http://stackoverflow.com/questions/5975403/how-to-increment-font-size-changes-with-jquery
	var fontSize = parseInt($("body").css("font-size"));
	var biggerFontSize = fontSize + 2 + "px";

	// set everything but the currently displayed speech to not show
	$("article:not(.current)").css("display", "none");

	// function to run when a button is clicked
	SideNav.children("a").click(function() {
		if ($(this).hasClass("speech-button") === true) {
		// change the text, background color, and font-size of the clicked and unclicked speech buttons
			$(this).css( {color: "#fff", backgroundColor: "#16becf", "font-size": biggerFontSize});
			$(this).siblings(".speech-button").css( { color: "#494949", backgroundColor: "#90c6cc", "font-size": fontSize});
		}
		
		// next line from http://stackoverflow.com/questions/1476516/how-to-pass-a-jquery-object-to-function
		// get the index of the clicked button
		var i = $(this).index();
		// pass the clicked button's index to the showRecipe function
		showSpeech(i);
	});

	$("#BtnDonate").bind("click", function(){
		// set the speech buttons to the same color
		$(".speech-button").css( { color: "#494949", backgroundColor: "#90c6cc", "font-size": fontSize});

		// reset the form
		document.getElementById("donationForm").reset();

		// show the form and remove any main-content and console messages
		if ($("#donateQuery").children("h3").length > 0) { 
			$("#donateQuery").children("h3").remove();
		}
		if ($("#ConsoleDisplay").children().length > 0) {
			$("#ConsoleDisplay").children().remove();
		};
		$("#donationForm").show();
	});

	$("#submitButton").bind("click", function() {
		// Code in here executes when the user clicks the "Donate" button in the main content area
		// get the value of the amount in the input field and check whether it's a number
		var donationAmount = $("#donationAmount").val();
		isNum = validateTextNum(donationAmount);

		// create a message in the console depending on the user's input
    	if (isNum === false || donationAmount == 0) {
		  if ($("#donateQuery").children("h3").length > 0) { 
			$("#donateQuery").children("h3").remove();
		  }
    	  $("#donateQuery").append("<h3>Sorry, but you didn't enter a valid amount. Please try again.</h3>");
    	} else if (donationAmount > 0 && donationAmount < 100) {
		  if ($("#donateQuery").children("h3").length > 0) { 
			$("#donateQuery").children("h3").remove();
		  }
		  $("#donationForm").hide();
       	  $("#donateQuery").append("<h3>Thank you for your donation of $" + donationAmount + ".</h3>");
    	} else if (donationAmount >= 100) {
		  if ($("#donateQuery").children("h3").length > 0) { 
			$("#donateQuery").children("h3").remove();
		  }
		  $("#donationForm").hide();
    	  $("#donateQuery").append("<h3>Thank you for your very generous donation!</h3>");
	    }
	    return false;
	});
});