$(document).ready(function () {
	objectFitImages();

	const imgTo = $('.third__image img')

	const slidersTabs = document.querySelectorAll('.portfolio__slider');


	const slider_pag = new Swiper('.pag-hero__slider', {
		slidesPerView: 'auto',
		spaceBetween: 45,
		loop: false,
		loopedSlides: 1,
		slideToClickedSlide: true,
		breakpoints: {
			370: {
				spaceBetween: 15,
			},
			993: {
				spaceBetween: 20,
			},
			1440: {
				spaceBetween: 45,
			},
		}
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
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 40,
				loop: false,
			},

			1201: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			1581: {
				loop: true,
				slidesPerView: 4,
				spaceBetween: 40,
			},
		}
	});

	const sliderDoing = new Swiper('.doing__slider', {
		slidesPerView: 3,
		loop: true,
		spaceBetween: 40,
		navigation: {
			nextEl: '.doing__next',
			prevEl: '.doing__prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 40,
			},

			1151: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
		}
	});

	const sliderModalTop = new Swiper('.top-modal__slider', {
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		slidesPerView: 1,
		loop: false,
		navigation: {
			nextEl: '.top-modal__next',
			prevEl: '.top-modal__prev',
		},
		pagination: {
			el: '.top-modal__pagination',
			type: 'bullets',
			clickable: true,
		},
	});

	const sliderModalBot = new Swiper('.bot-modal__slider', {
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		slidesPerView: 1,
		spaceBetween: 20,
		loop: false,
		direction: 'vertical',
		on: {
			slideChange: function () {
				$('.nav-modal__top').removeClass('nav-modal__top--active');
				$('.nav-modal__top').eq(sliderModalBot.realIndex).addClass('nav-modal__top--active')
			}
		}
	});

	$('.nav-modal__top').each(function (i, el) {
		$(el).on('click', function (ev) {
			sliderModalBot.slideTo(i);
			$('.nav-modal__top').removeClass('nav-modal__top--active')
			$(this).addClass('nav-modal__top--active')
		})
	})

	$('.nav-modal__item').on('click', function (ev) {

		$(this).closest('.doing__item').addClass('doing__item--active')

	})

	$('.item-third__top').on('click', function (ev) {
		let text = $(this).next('.item-third__bot');
		let imgFrom = $(this).attr('data-img');
		imgTo.attr('src', imgFrom);
		$(this).toggleClass('item-third__top--active')
		text.stop().slideToggle();
	})

	$('.item-answer__top').on('click', function (ev) {
		let text = $(this).next('.item-answer__bot');
		$(this).toggleClass('item-answer__top--active')
		text.stop().slideToggle();
	})

	$('.price-item__top').on('click', function (ev) {
		let text = $(this).next('.price-item__bot');
		$(this).toggleClass('price-item__top--active')
		text.stop().slideToggle();
	})


	$('.front-doing__btn').on('click', function (ev) {

		$(this).closest('.doing__item').addClass('doing__item--active')

	})

	// Высота блоков с карточками

	function setDoingHeight() {
		const doingItems = $('.doing-height');
		let maxHeight = 0;
		doingItems.each(function (i, el) {

			if ($(el).innerHeight() > maxHeight) {
				maxHeight = $(el).innerHeight()
			}
		})

		$('.doing__item').css('min-height', `${maxHeight}px`);
	}

	setDoingHeight()



	slidersTabs.forEach(function (el) {

		const slider_1 = new Swiper(el, {

			slidesPerView: 2,
			spaceBetween: 31,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			loop: false,
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	type: 'fraction',
			// 	clickable: true,
			// },
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
	$(".to-modal").on('click', function () {
		$.fancybox.open({
			src: '#modal-call',
			touch: 'false',
			smallBtn: false,
			buttons: '',
		});
	});

	$(".to-privacy").on('click', function () {
		$.fancybox.open({
			src: '#modal-polit',
			touch: 'false',
			smallBtn: false,
			buttons: '',
		});
	});

	$(".to-project").on('click', function () {
		$.fancybox.open({
			src: '#modal-project',
			touch: 'false',
			smallBtn: false,
			buttons: '',
		});
	});

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

	$(document).click(function (ev) {
		// if (!ev.target.closest('.header__burger') && !ev.target.closest('h1')) {
		// 	mobMenu.removeClass('active')
		// }
		if (!ev.target.closest('.front-doing__btn')) {
			$('.doing__item').removeClass('doing__item--active')
		}
	})


	if (document.getElementById('map')) {

		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
				center: [52.05693880953456, 118.68705543322154],
				zoom: 4
			});

			var myPlacemark = new ymaps.Placemark([55.54055193739615, 108.71146949572154], {
				hintContent: 'г. Борисоглебск, ул. Победы, д. 66',
				balloonContent: 'г. Борисоглебск, ул. Победы, д. 66'
			},
				{
					preset: 'islands#redIcon',
					iconLayout: 'default#image',
					iconImageSize: [20, 28],
					iconImageOffset: [-19, -52]
				});

			myMap.geoObjects.add(myPlacemark);
		});
	}


});