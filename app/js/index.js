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
	document.querySelector('.btn-services-js').classList.remove('lng-services-btn')
	document.querySelector('.btn-services-js').classList.add('lng-services-btn-mobile')
}

// Event listeners
const aboutLinks = document.querySelectorAll('.about-link-js')
const advantagesLinks = document.querySelectorAll('.advantages-link-js')
const servicesLinks = document.querySelectorAll('.services-link-js')
const partnersLinks = document.querySelectorAll('.partners-link-js')
const teamLinks = document.querySelectorAll('.team-link-js')
const contactsLinks = document.querySelectorAll('.contacts-link-js')
const readMore = document.querySelector('.read-more-js')
const contactUsButton = document.querySelector('.btn-services-js')
const modalForm = document.querySelector('.modal-form')
const modalBackground = document.querySelector('.modal-background')
const modalFormCross = document.querySelector('.modal-form-cross-js')
const burgerMenuButton = document.querySelector('.burger-menu-button')
const burgerMenu = document.querySelector('.burger-menu')
const burgerMenuCross = document.querySelector('.burger-menu-cross-js')
const modalTeamCross = document.querySelector('.modal-team-cross-js')

aboutLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.querySelector('.about').scrollIntoView({behavior: 'smooth'})
	})
})

advantagesLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.querySelector('.advantages').scrollIntoView({behavior: 'smooth'})
	})
})

servicesLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.querySelector('.services').scrollIntoView({behavior: 'smooth'})
	})
})

partnersLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.querySelector('.partners').scrollIntoView({behavior: 'smooth'})
	})
})

teamLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.querySelector('.team').scrollIntoView({behavior: 'smooth'})
	})
})

contactsLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.querySelector('.contacts').scrollIntoView({behavior: 'smooth'})
	})
})


// Modal form and modal team
function burgerMenuClose() {
	burgerMenuCross.classList.add('close')
	setTimeout(() => {
		burgerMenuCross.classList.add('close')
   }, 250)
	setTimeout(() => {
		burgerMenuCross.classList.remove('active')
		burgerMenu.classList.add('close')
	}, 400)
}

function forModalCross(modal, cross) {
	cross.classList.add('close')
	setTimeout(() => {
      modalBackground.classList.add('close')
		modal.classList.add('close')
   }, 250)
	setTimeout(() => {
		modalBackground.classList.remove('active')
		modal.classList.remove('active')
	}, 400)
}

readMore.addEventListener('click', () => {
	document.querySelector('.advantages').scrollIntoView({behavior: 'smooth'})
})

contactUsButton.addEventListener('click', () => {
	modalFormCross.classList.remove('close')
	modalBackground.classList.remove('close')
	modalForm.classList.remove('close')
	modalBackground.classList.add('active')
	modalForm.classList.add('active')
})

modalFormCross.addEventListener('click', () => {
	forModalCross(modalForm, modalFormCross)
})

modalBackground.addEventListener('click', () => {
	modalFormCross.classList.add('close')
	modalTeamCross.classList.add('close')
	setTimeout(() => {
      modalBackground.classList.add('close')
		modalForm.classList.add('close')
		modalTeam.classList.add('close')
   }, 250)
	setTimeout(() => {
		modalBackground.classList.remove('active')
		modalForm.classList.remove('active')
		modalTeam.classList.remove('active')
	}, 400)
})

// Burger menu
burgerMenuButton.addEventListener('click', () => {
	burgerMenu.classList.remove('close')
	burgerMenuCross.classList.remove('close')
	burgerMenu.classList.add('active')
})

modalTeamCross.addEventListener('click', () => {
	forModalCross(modalTeam, modalTeamCross)
})

burgerMenuCross.addEventListener('click', () => {
	burgerMenuClose()
})

document.querySelector('.about-burger-js').addEventListener('click', () => {
	burgerMenuClose()
})

document.querySelector('.advantages-burger-js').addEventListener('click', () => {
	burgerMenuClose()
})

document.querySelector('.services-burger-js').addEventListener('click', () => {
	burgerMenuClose()
})

document.querySelector('.partners-burger-js').addEventListener('click', () => {
	burgerMenuClose()
})

document.querySelector('.team-burger-js').addEventListener('click', () => {
	burgerMenuClose()
})

document.querySelector('.contacts-burger-js').addEventListener('click', () => {
	burgerMenuClose()
})