$(document).ready(function() {

	$(".title").addClass("animated bounceInDown");
	
	setTimeout(function() {
		$(".title").removeClass("animated bounceInDown");
	}, 1000);

	//bounces the contact me text
	$(".animation").hover(function() {
		$(this).addClass("animated bounce");
		setTimeout(function() {
			$(".animation").removeClass("animated bounce");
		}, 1200);
	});

});