$(document).ready(function () {
	objectFitImages();

	const slider_hero = new Swiper('.hero__slider', {
		slidesPerView: 1,
		loop: false,
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

	const slider_pag = new Swiper('.pag-hero__slider', {
		slidesPerView: 5,
		loop: false,
	});

	slider_hero.controller.control = [slider_pag];
	slider_pag.controller.control = [slider_hero];

	const slider2 = new Swiper('.fourth__slider', {
		slidesPerView: 3,
		loop: false,
		spaceBetween: 40,
	});

	$('.item-third__top').on('click', function (ev) {
		let text = $(this).next('.item-third__bot');
		$(this).toggleClass('item-third__top--active')
		text.slideToggle();
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

	// // Табы
	// $('ul.tabs__list').on('click', 'li:not(.active)', function () {
	// 	$(this).addClass('active').siblings().removeClass('active')
	// 		.closest('div.tabs').find('div.tabs__block').removeClass('active').eq($(this).index()).addClass('active');
	// })

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