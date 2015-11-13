$(document).ready(function() {
		setInterval(fadeImages,800);
});

function fadeImages() {
	if ($("#hero div:first-child").hasClass("current")) {
		$("#hero div:last-child").removeClass("previous");
		$("#hero div:first-child").removeClass("current");
		$("#hero div:first-child").addClass("previous");
		$("#hero div:nth-child(2)").addClass("current");
		$(".previous").fadeOut(800);
		$(".current").fadeIn(800);
	} else if ($("#hero div:last-child").hasClass("previous")) {
		$("#hero div:first-child").addClass("current");
		$(".previous").fadeOut(800);
		$(".current").fadeIn(800);
	} else {
		$(".previous").fadeOut(800);
		$(".current").fadeIn(800);
		$(".previous").removeClass("previous");
		$(".current").addClass("previous");
		$(".previous").removeClass("current");
		$(".previous").next().addClass("current");
	}
}