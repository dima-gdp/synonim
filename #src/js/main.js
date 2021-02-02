$(document).ready(function () {
	objectFitImages();

	AOS.init({
		once: true,
	});

	alertify.set('notifier', 'position', 'bottom-right');
	alertify.set('notifier', 'delay', 10);

	document.addEventListener('wpcf7mailsent', function (event) {
		alertify.success(event.detail.apiResponse.message)
	}, false);

	document.addEventListener('wpcf7invalid', function (event) {
		alertify.warning(event.detail.apiResponse.message);
	}, false);

	document.addEventListener('wpcf7mailfailed', function (event) {
		alertify.error(event.detail.apiResponse.message);
	}, false);



	$(document).on('click', '.wpcf7-submit', function (e) {
		if ($('.ajax-loader').hasClass('is-active')) {
			e.preventDefault();
			return false;
		}
	});

	const imgTo = $('.third__image img')
	const slidersTabs = document.querySelectorAll('.portfolio__slider');
	const fractionAll = $('.fraction__all')
	const fractionCurrent = $('.fraction__current')

	const getMap = $(window).innerWidth() > '700' ? 'map' : 'map-2';


	const slider_pag = new Swiper('.pag-hero__slider', {
		slidesPerView: 'auto',
		spaceBetween: 45,
		loop: false,
		loopedSlides: 1,
		slideToClickedSlide: true,
		breakpoints: {
			320: {
				spaceBetween: 15,
			},
			374: {
				spaceBetween: 25,
			},
			577: {
				spaceBetween: 35,
			},
			625: {
				spaceBetween: 40,
			},
			769: {
				spaceBetween: 15,
			},
			993: {
				spaceBetween: 30,
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
	});


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
				slidesPerView: 1,
				spaceBetween: 30,
				loop: false,
			},

			486: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			577: {
				slidesPerView: 2,
				spaceBetween: 40,
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
				slidesPerView: 1,
				spaceBetween: 20,
			},
			486: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			577: {
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
		breakpoints: {
			456: {
				pagination: {
					el: '.top-modal__pagination',
					type: 'bullets',
					clickable: true,
				},
			},
		}
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

	$('.item-third__bot').eq(0).slideDown()

	$('.item-third__top').on('click', function (ev) {
		let text = $(this).next('.item-third__bot');
		let imgFrom = $(this).attr('data-img');

		if ($(this).hasClass('item-third__top--active')) {
			$('.item-third__bot').stop().slideUp();
			$('.item-third__top').removeClass('item-third__top--active');

		}

		else {
			$('.item-third__bot').stop().slideUp();
			$('.item-third__top').removeClass('item-third__top--active');
			imgTo.attr('src', imgFrom);
			$(this).addClass('item-third__top--active');
			text.stop().slideDown();
		}

	})

	$('.item-answer__top').on('click', function (ev) {
		let text = $(this).next('.item-answer__bot');
		$(this).toggleClass('item-answer__top--active')
		text.stop().slideToggle();
	})

	$('.price-item__top').on('click', function (ev) {
		let cardList = ev.target.closest('.card-price__list');

		if ($(this).hasClass('price-item__top--active')) {
			$(cardList).find('.price-item__bot').stop().slideUp();
			$(cardList).find('.price-item__top').removeClass('price-item__top--active')

		}

		else {
			$(cardList).find('.price-item__bot').stop().slideUp();
			$(cardList).find('.price-item__top').removeClass('price-item__top--active')
			let text = $(this).next('.price-item__bot');
			$(this).toggleClass('price-item__top--active')
			text.stop().slideDown();
		}

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

	let arraySliders = [];

	slidersTabs.forEach(function (el, i) {

		arraySliders.push(new Swiper(el, {

			slidesPerView: 1,
			spaceBetween: 40,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			loop: false,
			navigation: {
				nextEl: `.portfolio__next--${i + 1}`,
				prevEl: `.portfolio__prev--${i + 1}`,
			},
			// breakpoints: {
			// 	320: {
			// 		spaceBetween: 40,
			// 	},
			// 	800: {
			// 		spaceBetween: 40,
			// 	},
			// },
			on: {
				slideChange: function () {
					fractionCurrent.html(this.realIndex + 1);
				},
				init: function () {
					// console.log(this.slides)
					// this.slideTo(0)
					if (this.slides.length) {
						fractionAll.html(this.slides.length)
						fractionCurrent.html(this.realIndex + 1)
					}
				},
				update: function () {
					if (this.slides.length) {
						fractionAll.html(this.slides.length)
						fractionCurrent.html(this.realIndex + 1)
					}
				},
			}
		})
		)
	})

	console.log(arraySliders[1].slides.length)


	// Fancy-box
	$(".to-modal").on('click', function () {
		$.fancybox.open({
			src: '#modal-call',
			smallBtn: false,
			buttons: '',
		});
	});

	$(".to-privacy").on('click', function () {
		$.fancybox.open({
			src: '#modal-polit',
			smallBtn: false,
			buttons: '',
		});
	});

	$(".to-project").on('click', function () {
		$.fancybox.open({
			src: '#modal-project',
			touch: false,
			smallBtn: false,
			buttons: '',
		});
	});

	// Input-mask
	$('input[type="tel"]').inputmask({ "mask": "+7 (999)-999-99-99" });

	// Табы
	$('ul.portfolio__tabs').on('click', 'li:not(.active)', function () {
		$(this).addClass('active')
			.siblings()
			.removeClass('active')
			.closest('div.portfolio__flex')
			.find('div.portfolio__tabs-block')
			.removeClass('active')
			.eq($(this).index())
			.addClass('active')
		// .closest('div.portfolio__left')
		$('.arrows-tab').removeClass('active')
		$('.arrows-tab').eq($(this).index()).addClass('active')
		// console.log($('.arrows-tab'))
		arraySliders[$(this).index()].update()
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





	ymaps.ready(function () {
		var myMap = new ymaps.Map(getMap, {
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



});