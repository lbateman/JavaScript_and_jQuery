/* This JavaScript was wrassled into its current form by Leah Bateman with a lot of input from the following websites:
		http://stackoverflow.com/questions/8999210/how-do-i-call-a-jquery-function-on-submitting-a-form
		https://formden.com/blog/validate-contact-form-jquery
		http://stackoverflow.com/questions/3780040/validating-a-radio-button-is-checked-with-jquery
		http://stackoverflow.com/questions/13212849/radio-button-validation-through-javascript
		http://www.freezecoders.com/2012/09/jquery-validation-for-radio-button-and-check-box.html
		http://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number
		http://stackoverflow.com/questions/4702730/regex-for-validating-an-integer-with-a-maximum-length-of-10-characters

	It contains the following functions:
		Main validation function -- sets variables, calls the validation subroutines, checks if they're all true, and submits (or not)
		validateName() -- makes sure there's something in the contact_name box; if not, changes CSS classes on two elements to indicate there's an error
		validateEmail() -- makes sure there's something approximating an email address in the contact_email box and handles CSS classes
		validatePreferredDate() -- makes sure one of the preferredDate radio buttons is selected

	Please see the validateTickets script for a bit more in-line documentation.
*/

$(document).ready(function () {
	$("#audition-form").submit(function() {					// run this function when the form is submitted
			var contactName = $("#contact_name").val();		// get the value in the contact_name box 
			var contactEmail = $("#contact_email").val();	// get the value in the contact_email box

			validName = validateName(contactName);			// call functions to validate each of the form elements/element groups
			validEmail = validateEmail(contactEmail);
			validPreferred = validatePreferredDate();

			// if all the elements are valid, submit the form; otherwise, don't submit
			if (validName === true && validEmail === true && validPreferred === true) {
				return true;
			} else {
				return false;
			}

	});

	// if there is anything at all in the contact_name box, hide error indications and return true; otherwise, show error indications and return false
	function validateName(nameToValidate) {
		if (nameToValidate.length > 0) {
			$("#contact_name").removeClass("invalid").addClass("valid");
			$("#contactNameMsg").removeClass("error_show").addClass("error");
			return true;
		} else {
			$("#contact_name").removeClass("valid").addClass("invalid");
			$("#contactNameMsg").removeClass("error").addClass("error_show");
			return false;
		}
	}

	// if the email address is in a valid(ish) format, hide error indications and return true; otherwise, show error indications and return false
	function validateEmail(emailToValidate) {
		var regExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var isEmail = regExpression.test(emailToValidate);

		if (isEmail === true) {
			$("#contact_email").removeClass("invalid").addClass("valid");
			$("#contactEmailMsg").removeClass("error_show").addClass("error");
			return true;
		} else {
			$("#contact_email").removeClass("valid").addClass("invalid");
			$("#contactEmailMsg").removeClass("error").addClass("error_show");
			return false;
		}
	}

	// check whether one of the radio buttons is selected
	function validatePreferredDate() {
		if($('input[name=preferredDate]:checked').length > 0) {
			$("#preferredDate").removeClass("invalid").addClass("valid");
			$("#preferredDateMsg").removeClass("error_show").addClass("error");
			return true;
		} else {
			$("#preferredDate").removeClass("valid").addClass("invalid");
			$("#preferredDateMsg").removeClass("error").addClass("error_show");
			return false;
		}
	}

/* left in for reasons of historical interest -- it's a JavaScript version of the preceding function
	function validatePreferredDate() {
		if(validateRadio (document.forms["auditionform"]["preferredDate"])) {
			$("#preferredDate").removeClass("invalid").addClass("valid");
			$("#preferredDateMsg").removeClass("error_show").addClass("error");
			console.log("Changed preferredDate's class to valid");
			return true;
		} else {
			$("#preferredDate").removeClass("valid").addClass("invalid");
			$("#preferredDateMsg").removeClass("error").addClass("error_show");
			console.log("Changed preferredDate's class to invalid");
			return false;
		}
	}

	function validateRadio (radios) {
	    for (i = 0; i < radios.length; ++ i) {
	        if (radios[i].checked) return true;
		} return false;
	} */
});