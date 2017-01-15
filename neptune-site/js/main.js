jQuery(document).ready(function($) {  

	// site preloader -- also uncomment the div in the header and the css style for #preloader
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});

	// Smooth Scroll
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
		  'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
		  window.location.hash = target;
		});
  });

});


