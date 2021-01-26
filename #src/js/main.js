$(document).ready(function () {
	objectFitImages();

	const slidersTabs = document.querySelectorAll('.portfolio__slider');


	const slider_pag = new Swiper('.pag-hero__slider', {
		slidesPerView: 'auto',
		spaceBetween: 45,
		loop: false,
		loopedSlides: 1,
		slideToClickedSlide: true,
	});


	const slider_hero = new Swiper('.hero__slider', {
		slidesPerView: 1,
		loopedSlides: 1,
		loop: false,
		thumbs: {
			swiper: slider_pag,
		}
		// breakpoints: {
		// 	370: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 0,
		// 	},
		// 	371: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 12,
		// 	},
		// 	421: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20,
		// 	},
		// 	577: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 40,
		// 	},
		// 	993: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 0,
		// 	},
		// }
	});


	// slider_hero.controller.control = [slider_pag];
	// slider_pag.controller.control = [slider_hero];

	const slider2 = new Swiper('.fourth__slider', {
		slidesPerView: 4,
		loop: false,
		spaceBetween: 40,
		navigation: {
			nextEl: '.fourth__next',
			prevEl: '.fourth__prev',
		},
	});

	$('.item-third__top').on('click', function (ev) {
		let text = $(this).next('.item-third__bot');
		$(this).toggleClass('item-third__top--active')
		text.slideToggle();
	})

	$('.price-item__top').on('click', function (ev) {
		let text = $(this).next('.price-item__bot');
		$(this).toggleClass('price-item__top--active')
		text.slideToggle();
	})

	slidersTabs.forEach(function (el) {

		const slider_1 = new Swiper(el, {

			slidesPerView: 2,
			spaceBetween: 31,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			loop: false,
			// navigation: {
			// 	nextEl: el.closest('.slider-1').querySelector('.slider-1__next'),
			// 	prevEl: el.closest('.slider-1').querySelector('.slider-1__prev'),
			// },
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 1,
			// 	},
			// 	653: {
			// 		slidesPerView: 2,
			// 	},
			// 	1130: {
			// 		slidesPerView: 3,
			// 	},
			// 	1340: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 30,
			// 	}
			// }
		});
	})

	// Fancy-box
	// $(".to-modal").on('click', function () {
	// 	$.fancybox.open({
	// 		src: '#modal',
	// 		touch: 'false',
	// 		smallBtn: false,
	// 		buttons: '',
	// 	});
	// });

	// $(".to-privacy").on('click', function () {
	// 	$.fancybox.open({
	// 		src: '#modal-polit',
	// 		touch: 'false',
	// 		smallBtn: false,
	// 		buttons: '',
	// 	});
	// });

	// Input-mask
	// $('input[type="tel"]').inputmask({ "mask": "+7 (999)-999-99-99" });

	// Табы
	$('ul.portfolio__tabs').on('click', 'li:not(.active)', function () {
		$(this).addClass('active').siblings().removeClass('active')
			.closest('div.portfolio__flex').find('div.portfolio__tabs-block').removeClass('active').eq($(this).index()).addClass('active');
	})

	// Menu-burger
	// burger.click(function () {
	// 	mobMenu.addClass('active')
	// })

	// $('.mob-menu__close').click(function () {
	// 	mobMenu.removeClass('active')
	// })

	// $(document).click(function (ev) {
	// 	if (!ev.target.closest('.header__burger') && !ev.target.closest('h1')) {
	// 		mobMenu.removeClass('active')
	// 	}
	// })



});