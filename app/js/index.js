const swiperPartners = new Swiper('.swiper-partners', {
	// Optional parameters
	loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination-partners',
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next-partners',
		prevEl: '.swiper-button-prev-partners',
	},
})

const swiperTeam = new Swiper('.swiper-team', {
	// Optional parameters
	loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination-team',
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next-team',
		prevEl: '.swiper-button-prev-team',
	},
})