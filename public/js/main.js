var triggerData;
var target;

$( document ).ready(function() { 
	$('.admin-nav__close').click(function() {
		$('.admin-nav').fadeOut();
	});
	$('.admin-nav__open').click(function() {
		$('.admin-nav').fadeIn();
	});


	window.sr = ScrollReveal();
	sr.reveal('.grid-item', { duration: 2000 }, 50);
	sr.reveal('.testimonial-wrapper', { duration: 2000 }, 50);
	sr.reveal('.content-alt', { duration: 1200, scale: 1 });

	// if($(window).innerWidth() >= 1200) {
	// 	$.scrollify({
	// 		section : ".js-scroll-section",
	// 		updateHash: false,
	// 		setHeights: false,
	// 	});
	// }

	$('.js-anchor').on('click', function(e) {
		e.preventDefault();
		var target;

		target = $('#'+$(this).attr('href'));

		$('html, body').animate({
	        scrollTop: target.offset().top
	    }, 1500);
	});


});