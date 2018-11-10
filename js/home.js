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

	var scrollTop = $(".scroll-top");

  	$(window).scroll(function() {
		// declare variable
		var topPos = $(this).scrollTop();

		// if user scrolls down - show scroll to top button
		if (topPos > 200) {
	  	$(scrollTop).css("opacity", "1");

		} else {
	  	$(scrollTop).css("opacity", "0");
		}

	  	}); // scroll END

	  	//Click event to scroll to top
	  	$(scrollTop).click(function() {
	    	$('html, body').animate({
	      	scrollTop: 0
	    }, 800);
	    return false;

	});

});