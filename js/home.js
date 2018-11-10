$(document).ready(function() {
	console.log("working");

	$('.collapsible').collapsible();
	console.log("clicked");

	$("a[href^='#']").click(function(e) {
		e.preventDefault();
		
		var position = $($(this).attr("href")).offset().top;

		$("body, html").animate({
			scrollTop: position
		}, 600, 'linear' );
	});

});