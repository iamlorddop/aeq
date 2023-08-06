const langChangeButtons = document.querySelectorAll('.change-lang')
const ruLangButtons = document.querySelectorAll('.ru')
const enLangButtons = document.querySelectorAll('.en')
const allLang = ['ru', 'en']

ruLangButtons.forEach(button => {
	let hash = window.location.hash
	hash = hash.substring(1)
	if (hash == 'ru') {
			button.classList.add('active')
	}
})

enLangButtons.forEach(button => {
	let hash = window.location.hash
	hash = hash.substring(1)
	if (hash == 'en') {
			button.classList.add('active')
	}
})

langChangeButtons.forEach(button => {
	button.addEventListener('click', () => {
		let langButton = button
		if (langButton.classList.contains('ru')) {
			langButton.classList.add('active')
			changeURLLanguage('ru')
		} else {
			langButton.classList.add('active')
			changeURLLanguage('en')
		}
	})
})

function changeURLLanguage(lang) {
	location.href = `${window.location.pathname}#${lang}`
	location.reload()
}

function defaultLanguage() {
	let hash = window.location.hash
	hash = hash.substring(1)
	if (!allLang.includes(hash)) {
		location.href = `${window.location.pathname}#ru`
		location.reload()
	}
	document.querySelector('title').innerHTML = langObj['about-title'][hash]
}

function changeLanguage() {
	let hash = window.location.hash
	hash = hash.substring(1)
	defaultLanguage()
	for (let key in langObj) {
		let elem = document.querySelector('.lng-' + key)
		if (elem) {
			elem.innerHTML = langObj[key][hash]
		}
	}
}

changeLanguage()