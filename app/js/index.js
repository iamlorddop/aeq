// Init wow
let wow = new WOW(
	{
		boxClass:     'wow',
		animateClass: 'animated', 
		offset:       0,
		mobile:       true,
		live:         true,
		callback:     function(box) {
		 // The callback is fired every time an animation is started
		 // The argument that is passed in is the DOM node being animated
		},
		scrollContainer: null,
	}
)
wow.init()

// Init swiper
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

// Media queries
if (document.documentElement.clientWidth <= 640) {
	document.querySelector('.btn-services-js').innerHTML = 'Связаться с нами'
}