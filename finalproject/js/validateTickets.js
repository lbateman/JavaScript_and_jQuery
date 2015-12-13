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
		validatePhone() -- makes sure there's something approximating a phone number in the contact_phone box and handles CSS classes
		validateTicketNum() -- calls the validateTextNum() function
		validateTextNum() -- iterates through the ticket number boxes and makes sure at least one of them has a number greater than 0
		validateTicketDate() -- makes sure one of the ticketDate radio buttons is selected
*/

$(document).ready(function () {
	$("#ticket-form").submit(function() {					// run this function when the form is submitted
			var contactName = $("#contact_name").val();		// get the value in the contact_name box
			var contactEmail = $("#contact_email").val();	// get the value in the contact_email box
			var contactPhone = $("#contact_phone").val();	// get the value in the contact_phone box

			validName = validateName(contactName);			// call functions to validate each of the form elements/element groups
			validEmail = validateEmail(contactEmail);
			validPhone = validatePhone(contactPhone);
			validTicketNum = validateTicketNum();
			validTicketDate = validateTicketDate();

			// if all the elements are valid, submit the form; otherwise, don't submit
			if (validName === true && validEmail === true && validPhone === true && validTicketNum && validTicketDate === true) {
				return true;
			} else {
				return false;
			}
	});

	function validateName(nameToValidate) {
		// if there is anything at all in the contact_name box...
		if (nameToValidate.length > 0) {
			// hide all the error indicators and return 'true'
			$("#contact_name").removeClass("invalid").addClass("valid");
			$("#contactNameMsg").removeClass("error_show").addClass("error");
			return true;
		} else {
			// otherwise, show the error indicators and return false
			$("#contact_name").removeClass("valid").addClass("invalid");
			$("#contactNameMsg").removeClass("error").addClass("error_show");
			return false;
		}
	}

	function validateEmail(emailToValidate) {
		// sets up a pattern to match the input against (regex ganked from https://formden.com/blog/validate-contact-form-jquery)
		// works even if the user doesn't include a top-level domain, which is bad, but I'll fix it later
		var regExEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		// validates the email address against the regex
		var isEmail = regExEmail.test(emailToValidate);

		// if the email address is in a valid(ish) format...
		if (isEmail === true) {
			// hide all the error indicators and return 'true'
			$("#contact_email").removeClass("invalid").addClass("valid");
			$("#contactEmailMsg").removeClass("error_show").addClass("error");
			return true;
		} else {
			// otherwise, show the error indicators and return false
			$("#contact_email").removeClass("valid").addClass("invalid");
			$("#contactEmailMsg").removeClass("error").addClass("error_show");
			return false;
		}
	}

	function validatePhone(phoneToValidate) {
		// sets up a pattern to match the input against (regex ganked from http://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number)
		// handles US phone numbers only (I tried an international regex, but it didn't work)
		var regExUSPhone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
		// validates the email address against the regex
		var isPhone = regExUSPhone.test(phoneToValidate);

		if (isPhone === true) {
			// I'm starting to wonder if I could have written a single function that passed in the input ID, the error message ID, and the test
			$("#contact_phone").removeClass("invalid").addClass("valid");
			$("#contactPhoneMsg").removeClass("error_show").addClass("error");
			return true;
		} else {
			$("#contact_phone").removeClass("valid").addClass("invalid");
			$("#contactPhoneMsg").removeClass("error").addClass("error_show");
			return false;
		}
	}

	function validateTicketNum() {
		// call a function to validate whether there's at least one non-zero number in one of the .ticketNumber fields
		var validity = validateTextNum();

		if(validity === true) {
			$("#ticketNum").removeClass("invalid").addClass("valid");
			$("#ticketNumMsg").removeClass("error_show").addClass("error");
			return true;
		} else {
			$("#ticketNum").removeClass("valid").addClass("invalid");
			$("#ticketNumMsg").removeClass("error").addClass("error_show");
			return false;
		}
	}

	function validateTextNum() {
		// regex ganked from http://stackoverflow.com/questions/4702730/regex-for-validating-an-integer-with-a-maximum-length-of-10-characters and modified
		var regExNum = /^[0-9]{1,3}$/;
		// need to have a variable to hold the return value because otherwise the empty fields will return NaN and the function will return false
		var returnValue = false;

		// iterate over the text boxes with class .ticketNumber
		var ticketNum = $(".ticketNumber").each(function() {
			// change the values into integers
			var tickets = parseInt($(this).val(), 10);
			// if the text field has non-zero integer, set returnValue to true
    		if (regExNum.test(tickets) === true && tickets > 0) {
    			returnValue = true;
    		}
		});
		return returnValue;
	}

	// check whether one of the radio buttons is selected
	function validateTicketDate() {
		if($('input[name=ticketDate]:checked').length > 0) {
			$("#ticketDate").removeClass("invalid").addClass("valid");
			$("#ticketDateMsg").removeClass("error_show").addClass("error");
			return true;
		} else {
			$("#ticketDate").removeClass("valid").addClass("invalid");
			$("#ticketDateMsg").removeClass("error").addClass("error_show");
			return false;
		}
	}

/*	leaving this in for reasons of historical interest -- it's a JavaScript version of the preceding function
	function validateTicketDate() {
		if(validateRadio(document.forms["ticketform"]["ticketDate"]) === true) {
			$("#ticketDate").removeClass("invalid").addClass("valid");
			$("#ticketDateMsg").removeClass("error_show").addClass("error");
			console.log("Changed ticketDate's class to valid");
			return true;
		} else {
			$("#ticketDate").removeClass("valid").addClass("invalid");
			$("#ticketDateMsg").removeClass("error").addClass("error_show");
			console.log("Changed ticketDate's class to invalid");
			return false;
		}
	}

	function validateRadio (radios) {
	    for (i = 0; i < radios.length; ++ i) {
	        if (radios[i].checked) return true;
		} return false;
	} */
}); 