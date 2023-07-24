const langChangeButton = document.querySelectorAll('.change-lang')
const allLang = ['ru', 'en']

langChangeButton.forEach(button => {
	button.addEventListener('click', () => {
		let langButton = button
		if (langButton.classList.contains('ru')) {
			changeURLLanguage('ru')
		} else {
			changeURLLanguage('en')
		}
	})
})

function changeURLLanguage(lang) {
	location.href = `${window.location.pathname}#${lang}`
	location.reload()
}

function changeLanguage() {
	let hash = window.location.hash
	hash = hash.substring(1)
	if (!allLang.includes(hash)) {
		location.href = `${window.location.pathname}#ru`
		location.reload()
	}
	document.querySelector('title').innerHTML = langArr['about-title'][hash]
	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key)
		if (elem) {
			elem.innerHTML = langArr[key][hash]
		}
	}
}

changeLanguage()