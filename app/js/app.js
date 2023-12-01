// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'


document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	mobMenuToggle()
	stickyHeader()
	testimonialsSlider()
	cloudFeaturesSlider()
	toggleFaq()
	teamSlider()
	customSelect()
	postsSlider()
	changeRates()
	reviewsSlider()
	brandsSlider()
})
function mobMenuToggle() {
	let btn = document.querySelector('.header__navigation-btn-menu')
	let menu = document.querySelector(btn.dataset.toggle)
	let header = document.querySelector('.header')
	btn.addEventListener('click', function (e) {
		btn.classList.toggle('active')
		menu.classList.toggle('active')
		header.classList.toggle('active')
	})
}
function stickyHeader() {
	let header = document.querySelector('.header')

	if (document.body.getBoundingClientRect().top < 0) {
		header.classList.add('sticky')
	} else {
		header.classList.remove('sticky')
	}

	document.addEventListener('scroll', function () {
		if (document.body.getBoundingClientRect().top < 0) {
			header.classList.add('sticky')
		} else {
			header.classList.remove('sticky')
		}

	})
}

function testimonialsSlider() {
	let swiper = new Swiper(".testimonials-slider", {
		slidesPerView: 3,
		spaceBetween: 24,
		// loop: true,
		navigation: {
			nextEl: ".testimonials-button-next",
			prevEl: ".testimonials-button-prev",
		},

		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			0: {
				slidesPerView: 1
			},
		}
	});
}

function brandsSlider() {
	let swiper = new Swiper(".brands-swiper", {
		slidesPerView: 3,
		spaceBetween: 24,
		autoplay: true,
		loop: false,
		navigation: {
			nextEl: ".brands-button-next",
			prevEl: ".brands-button-prev",
		},

		breakpoints: {
			1200: {
				slidesPerView: 5,
			},
			992: {
				slidesPerView: 4,
			},
			0: {
				slidesPerView: 3
			},
		}
	});
}

function reviewsSlider() {
	let swiper = new Swiper(".reviews-swiper", {
		slidesPerView: 1,
		spaceBetween: 24,
		navigation: {
			nextEl: ".reviews-button-next",
			prevEl: ".reviews-button-prev",
		},
		pagination: {
			el: ".reviews-pagination",
		  },
	});
}

function postsSlider() {
	let swiper = new Swiper(".posts-swiper", {
		slidesPerView: 4,
		spaceBetween: 24,
		// loop: true,
		navigation: {
			nextEl: ".posts-button-next",
			prevEl: ".posts-button-prev",
		},

		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 2,
			},
			0: {
				slidesPerView: 1
			},
		}
	});
}

function cloudFeaturesSlider() {
	let swiper = new Swiper(".cloud-features-slider", {
		slidesPerView: 1,
		pagination: {
			el: ".cloud-features-pagination",
			clickable: true,
			dynamicBullets: true,
			dynamicMainBullets: 1,
			renderBullet: function (index, className) {
				let preValue = ''
				if (index < 9) {
					preValue = '0'
				} else {
					preValue = ''
				}

				return '<div class="' + className + '">' + preValue + (index + 1) + "</div>";
			},
		},
	});
}

function toggleTimeline() {
	let items = document.querySelectorAll('.timeline__item')
	if (!items.length) {
		return
	}
	let activeItem = document.querySelector('.timeline__item.active')

	setInterval(function () {
		if (activeItem.nextElementSibling) {
			activeItem.classList.remove('active')
			activeItem = activeItem.nextElementSibling
			activeItem.classList.add('active')
		} else {
			activeItem.classList.remove('active')
			activeItem = items[0]
			activeItem.classList.add('active')
		}
	}, 2000)
}

function toggleFaq() {
	let items = document.querySelectorAll('.faq__item')
	let activeItem
	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener('click', function (e) {
			if (e.currentTarget !== activeItem && !!activeItem) {
				activeItem.classList.remove('active')
			}
			if (e.currentTarget.classList.contains('active')) {
				e.currentTarget.classList.remove('active')
			} else {
				e.currentTarget.classList.add('active')
				activeItem = e.currentTarget
			}
		})


	}


}



function teamSlider() {
	let popup = document.querySelector('.meet-team-popup')
	if (!popup) return
	var swiper = new Swiper(".meet-team-swiper", {
		navigation: {
			nextEl: ".meet-team-button-next",
			prevEl: ".meet-team-button-prev",
		},
	});


	let employees = document.querySelectorAll('.cart-employee')
	for (let i = 0; i < employees.length; i++) {
		employees[i].addEventListener('click', function (e) {
			popup.classList.add('open')
			swiper.slideTo(+e.currentTarget.dataset.slide)
		})
	}

	popup.addEventListener('click', function (e) {
		if (e.target === e.currentTarget) {
			popup.classList.remove('open')
		} else if (e.target.classList.contains('meet-team-popup__close')) {
			popup.classList.remove('open')
		} else {
			return
		}
	})
}



function customSelect() {
	let select = document.querySelectorAll('.select')
	if (!select.length) return
	for (let i = 0; i < select.length; i++) {
		let selected = select[i].querySelector('.selected')
		let input = select[i].querySelector('input')
		let current = select[i].querySelector('.option.current')
		if (current && current.dataset.value && input) {
			if (input) {
				input.value = current.dataset.value
				selected.innerHTML = current.innerHTML
			}
		}
		select[i].addEventListener('click', function (e) {
			let selected = e.currentTarget.querySelector('.selected')
			let input = e.currentTarget.querySelector('input')
			e.currentTarget.classList.toggle('open')
			if (e.target.classList.contains('option') && e.target.dataset.value) {
				if (input) {
					input.value = e.target.dataset.value
					selected.innerHTML = e.target.innerHTML
				}
			}
		})
	}
}


function changeRates () {
	let ratesSelect = document.querySelector('.rates__select')
	if (!ratesSelect) return
	let fixedLine = document.querySelector('.js-rates-fixed')
	let mobile = document.querySelector('.js-rates-mobile')

	let value = ratesSelect.querySelector('.option.current').dataset.value.split(';')
	fixedLine.innerHTML = value[0]
	mobile.innerHTML = value[1]

	ratesSelect.addEventListener('click', function (e) {
		if (e.target.classList.contains('option')) {
			let value = e.target.dataset.value.split(';')
			fixedLine.innerHTML = value[0]
			mobile.innerHTML = value[1]
		}
	})
}