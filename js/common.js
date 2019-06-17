$(document).ready(function() {

	// Nav Links

	$('.nav-link').click(function() {
		$(this).addClass('anim-bg');

		setTimeout(function() {
			$('.anim-bg').addClass('anim-bg-end');
		}, 400);

		$('.main-block-social').css('bottom', '-121px');
		$('.show-contacts').css('bottom', '50px');

		$('.portfolio-more').removeClass('portfolio-more-open');
		$('.portfolio-button').removeClass('portfolio-button-open');

		$('.overlay-bl').removeClass('overlay-bl-disabled');

		setTimeout(function() {
			$('.anim-bg').removeClass('anim-bg-end').removeClass('anim-bg');
		}, 550);

		setTimeout(function() {
			$('.overlay-bl').addClass('overlay-bl-disabled');
		}, 1000);
	});


	// About

	$('.nav-link-about').click(function() {
		setTimeout(function() {

			$('.about-block').css('display', 'block').css('z-index', '100');
			$('.main-block-inner').css('left', 'auto');
			$('.main-block').css('left', 'auto').css('width', '0');

			$('.overlay-bl').removeClass('overlay-bl-disabled');

			setTimeout(function() {
				$('.main-block').css('display', 'none').css('left', '0');
				$('.main-block-inner').css('left', '0');

				$('.overlay-bl').addClass('overlay-bl-disabled');
			}, 500);

		}, 500);
	});

	$('.nav-link-about-home').click(function() {
		setTimeout(function() {

			$('.main-block').css('display', 'block');

		}, 450);

		setTimeout(function() {

			$('.main-block-inner').css('left', 'auto');
			$('.main-block').css('left', 'auto').css('width', '100%');

			$('.overlay-bl').removeClass('overlay-bl-disabled');

			setTimeout(function() {
				$('.main-block-inner').css('left', '0');
				$('.main-block').css('left', '0');
				$('.about-block').css('display', 'none').css('z-index', '50');

				$('.overlay-bl').addClass('overlay-bl-disabled');
			}, 500);

		}, 500);
	});
	
	$('.nav-link-about-portfolio').click(function() {
		setTimeout(function() {

			$('.portfolio-block').css('display', 'block');
			$('.about-block-inner').css('right', 'auto');
			$('.about-block').css('right', 'auto').css('width', '0');

			$('.overlay-bl').removeClass('overlay-bl-disabled');

			setTimeout(function() {
				$('.about-block').css('display', 'none').css('z-index', '50');
				$('.portfolio-block').css('z-index', '100');
				$('.about-block').css('right', '0').css('width', '100%');

				$('.overlay-bl').addClass('overlay-bl-disabled');
			}, 500);

		}, 500);
	});


	// Portfolio

	$('.nav-link-portfolio').click(function() {
		setTimeout(function() {

			$('.portfolio-block').css('display', 'block').css('z-index', '100');
			$('.main-block-inner').css('right', 'auto');
			$('.main-block').css('right', 'auto').css('width', '0');

			$('.overlay-bl').removeClass('overlay-bl-disabled');

			setTimeout(function() {
				$('.main-block').css('display', 'none').css('right', '0');
				$('.main-block-inner').css('right', '0');

				$('.overlay-bl').addClass('overlay-bl-disabled');
			}, 500);

		}, 500);
	});

	$('.nav-link-portfolio-home').click(function() {
		setTimeout(function() {

			$('.main-block').css('display', 'block');

		}, 450);

		setTimeout(function() {

			$('.main-block-inner').css('right', 'auto');
			$('.main-block').css('right', 'auto').css('width', '100%');

			$('.overlay-bl').removeClass('overlay-bl-disabled');

			setTimeout(function() {
				$('.main-block-inner').css('right', '0');
				$('.main-block').css('right', '0');
				$('.portfolio-block').css('display', 'none').css('z-index', '50');

				$('.overlay-bl').addClass('overlay-bl-disabled');
			}, 500);

		}, 500);
	});
	
	$('.nav-link-portfolio-about').click(function() {
		setTimeout(function() {

			$('.about-block').css('display', 'block');
			$('.portfolio-block-inner').css('left', 'auto');
			$('.portfolio-block').css('left', 'auto').css('width', '0');

			$('.overlay-bl').removeClass('overlay-bl-disabled');

			setTimeout(function() {
				$('.portfolio-block').css('display', 'none').css('z-index', '50');
				$('.about-block').css('z-index', '100');
				$('.portfolio-block').css('left', '0').css('width', '100%');

				$('.overlay-bl').addClass('overlay-bl-disabled');
			}, 500);

		}, 500);
	});


	// Portfolio trigger

	$('.portfolio-more-trigger').click(function() {
		var currentTrigger = $(this).closest('.portfolio-item').find('.portfolio-more');
		var currentTriggerButton = $(this).closest('.portfolio-item').find('.portfolio-button');

		$('.portfolio-more').not(currentTrigger).removeClass('portfolio-more-open');
		$('.portfolio-button').not(currentTriggerButton).removeClass('portfolio-button-open');

		currentTrigger.toggleClass('portfolio-more-open');
		currentTriggerButton.toggleClass('portfolio-button-open');
	});


	// Home Contacts

	$('.show-contacts').click(function() {
		$(this).addClass('anim-bg');

		setTimeout(function() {
			$('.anim-bg').addClass('anim-bg-end');
		}, 400);

		setTimeout(function() {
			$('.show-contacts').css('bottom', '-121px');
			$('.main-block-social').css('bottom', '0');
		}, 500);

		setTimeout(function() {
			$('.anim-bg').removeClass('anim-bg-end').removeClass('anim-bg');
		}, 550);
	});


	// Home Lights

	$('.turn-light-off').click(function() {
		$(this).addClass('anim-bg');

		setTimeout(function() {
			$('.turn-light-off').css('top', '-50px');
			$('.turn-light-on').css('top', '50px');
			$('.anim-bg').addClass('anim-bg-end');
		}, 400);
		
		setTimeout(function() {
			$('body').addClass('dark-mode');
			$('meta[name="theme-color"]').attr('content', '#000000');
		}, 500);

		setTimeout(function() {
			$('.anim-bg').removeClass('anim-bg-end').removeClass('anim-bg');
		}, 550);
	});

	$('.turn-light-on').click(function() {
		$(this).addClass('anim-bg');

		setTimeout(function() {
			$('.turn-light-on').css('top', '-50px');
			$('.turn-light-off').css('top', '50px');
			$('.anim-bg').addClass('anim-bg-end');
		}, 400);
		
		setTimeout(function() {
			$('body').removeClass('dark-mode');
			$('meta[name="theme-color"]').attr('content', '#ffffff');
		}, 500);

		setTimeout(function() {
			$('.anim-bg').removeClass('anim-bg-end').removeClass('anim-bg');
		}, 550);
	});


	// Portfolio

	var portfolioItems = $('.portfolio-item');
	if (portfolioItems.length % 2 == 0) {
		$('.portfolio-item').slice(-2, -1).addClass('portfolio-item-last');
	}


	// Overlay on action

	$('.overlay-bl').addClass('overlay-bl-disabled');


	// Retina screens

	if (window.devicePixelRatio > 1) {
		var images = $("img");

		for (var i = 0; i < images.length; i++) {
			var imageType = $(images[i]).attr('data-src').substr(-4);
			var imageName = $(images[i]).attr('data-src').substr(0, $(images[i]).attr('data-src').length - 4);
			imageName += "@2x" + imageType;
			$(images[i]).attr('data-src', imageName);
		}
	}


	// Lazy Load images

	let imagesLazy = document.querySelectorAll(".lazyload");
	lazyload(imagesLazy);

});
