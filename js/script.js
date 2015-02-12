$(document).ready(function() {

	//bounces the contact me text
	$(".animation").hover(function() {
		$(this).addClass("animated bounce");
		setTimeout(function() {
			$(".animation").removeClass("animated bounce");
		}, 1000);
	});

});