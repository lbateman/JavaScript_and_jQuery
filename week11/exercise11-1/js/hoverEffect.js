// this one was much easier; i was starting to give up hope!
// code is from my notes on the videos unless otherwise specified

// set up the callback function to run when an .event div is hovered over
$(document).ready(function() {
	$(".event").hover(hoverEffectDiv, hoverEffectDiv);
});

// the callback function...
function hoverEffectDiv(evt) {
	// this was straightforward
	$(this).toggleClass("hoverAffected");
	// had to use Stack Overflow for this: http://stackoverflow.com/questions/306583/this-selector-and-children
	// learned that 'find' finds children, grand-children, great-grandchildren, etc....
	// but 'children' only seems to find immediate descendents
	$(this).find(".eventDate").toggleClass("hoverAffectedChild");
}