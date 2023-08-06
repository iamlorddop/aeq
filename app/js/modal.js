const modalLinks = document.querySelectorAll('.team-flex__item')
const modalTitle = document.querySelector('.modal-team__title')
const modalDescription = document.querySelector('.modal-team__description')
const modalText = document.querySelector('.modal-team__text')
const modalImage = document.querySelector('.modal-team__image')
const modalTeam = document.querySelector('.modal-team')

let aboutTeamMember = {
	'Владислав Смоенко' : 'Управляющий партнер компании AEQ. Энергичный и глобально мыслящий анти-кризисный руководитель с опытом комплексной работы в консалтинге, крупном частном инвестиционном фонде и собственных проектах. Специализируется на сложных проектах, требующих анти-кризисного управления, а также на крупных M&A сделках в России и за рубежом.<br><br>Виктор имеет профильное юридическое образование, полученное в РУДН (бакалавр права) и МГЮА им. Кутафина (магистр права). В 2023 году Виктор также получил диплом Московской школы управления Сколково в рамках программы для менеджеров высшего звена Skolkovo Executive MBA for Eurasia.<br><br>Свободно говорит на английском языке. Увлекается катанием на вейкборде, тайским боксом, силовыми видами спорта и путешествиями.',
	'Алена Бросова' : 'Управляющий партнер компании AEQ. Энергичный и глобально мыслящий анти-кризисный руководитель с опытом комплексной работы в консалтинге, крупном частном инвестиционном фонде и собственных проектах. Специализируется на сложных проектах, требующих анти-кризисного управления, а также на крупных M&A сделках в России и за рубежом.<br><br>Виктор имеет профильное юридическое образование, полученное в РУДН (бакалавр права) и МГЮА им. Кутафина (магистр права). В 2023 году Виктор также получил диплом Московской школы управления Сколково в рамках программы для менеджеров высшего звена Skolkovo Executive MBA for Eurasia.<br><br>Свободно говорит на английском языке. Увлекается катанием на вейкборде, тайским боксом, силовыми видами спорта и путешествиями.',
	'Александра Крюкова' : 'Управляющий партнер компании AEQ. Энергичный и глобально мыслящий анти-кризисный руководитель с опытом комплексной работы в консалтинге, крупном частном инвестиционном фонде и собственных проектах. Специализируется на сложных проектах, требующих анти-кризисного управления, а также на крупных M&A сделках в России и за рубежом.<br><br>Виктор имеет профильное юридическое образование, полученное в РУДН (бакалавр права) и МГЮА им. Кутафина (магистр права). В 2023 году Виктор также получил диплом Московской школы управления Сколково в рамках программы для менеджеров высшего звена Skolkovo Executive MBA for Eurasia.<br><br>Свободно говорит на английском языке. Увлекается катанием на вейкборде, тайским боксом, силовыми видами спорта и путешествиями.',
	'Максим Варешюк' : 'Управляющий партнер компании AEQ. Энергичный и глобально мыслящий анти-кризисный руководитель с опытом комплексной работы в консалтинге, крупном частном инвестиционном фонде и собственных проектах. Специализируется на сложных проектах, требующих анти-кризисного управления, а также на крупных M&A сделках в России и за рубежом.<br><br>Виктор имеет профильное юридическое образование, полученное в РУДН (бакалавр права) и МГЮА им. Кутафина (магистр права). В 2023 году Виктор также получил диплом Московской школы управления Сколково в рамках программы для менеджеров высшего звена Skolkovo Executive MBA for Eurasia.<br><br>Свободно говорит на английском языке. Увлекается катанием на вейкборде, тайским боксом, силовыми видами спорта и путешествиями.',
	'Артем Гавришин' : 'Управляющий партнер компании AEQ. Энергичный и глобально мыслящий анти-кризисный руководитель с опытом комплексной работы в консалтинге, крупном частном инвестиционном фонде и собственных проектах. Специализируется на сложных проектах, требующих анти-кризисного управления, а также на крупных M&A сделках в России и за рубежом.<br><br>Виктор имеет профильное юридическое образование, полученное в РУДН (бакалавр права) и МГЮА им. Кутафина (магистр права). В 2023 году Виктор также получил диплом Московской школы управления Сколково в рамках программы для менеджеров высшего звена Skolkovo Executive MBA for Eurasia.<br><br>Свободно говорит на английском языке. Увлекается катанием на вейкборде, тайским боксом, силовыми видами спорта и путешествиями.',
	'Оксана Травинская' : 'Управляющий партнер компании AEQ. Энергичный и глобально мыслящий анти-кризисный руководитель с опытом комплексной работы в консалтинге, крупном частном инвестиционном фонде и собственных проектах. Специализируется на сложных проектах, требующих анти-кризисного управления, а также на крупных M&A сделках в России и за рубежом.<br><br>Виктор имеет профильное юридическое образование, полученное в РУДН (бакалавр права) и МГЮА им. Кутафина (магистр права). В 2023 году Виктор также получил диплом Московской школы управления Сколково в рамках программы для менеджеров высшего звена Skolkovo Executive MBA for Eurasia.<br><br>Свободно говорит на английском языке. Увлекается катанием на вейкборде, тайским боксом, силовыми видами спорта и путешествиями.',
}

function changeTextInModalTeam(image, title, desc, text, num) {
	modalImage.style.backgroundImage = image
	modalTitle.innerHTML = title
	modalTitle.classList.add(`lng-modal-team-title${num}`)
	modalDescription.innerHTML = desc
	modalDescription.classList.add(`lng-modal-team-description${num}`)
	modalText.innerHTML = text
	modalText.classList.add(`lng-modal-team-text${num}`)
}

function openModalTeam() {
	modalTeamCross.classList.remove('close')
	modalBackground.classList.remove('close')
	modalTeam.classList.remove('close')
	modalBackground.classList.add('active')
	modalTeam.classList.add('active')
}

function changeLanguageInModalTeam() {
	let hash = window.location.hash
	hash = hash.substring(1)
	for (let key in langObj) {
		let elem = document.querySelector('.lng-' + key)
		if (elem) {
			elem.innerHTML = langObj[key][hash]
		}
	}
}

if (modalLinks.length > 0) {
	for(let i = 0; i < modalLinks.length; i++) {
		const modalLink = modalLinks[i]
		modalLink.addEventListener('click', () => {
			let memberName = modalLink.dataset.name
			let memberJob = modalLink.dataset.job
			if (memberName == 'Владислав Смоенко') {
				changeTextInModalTeam(
					'url("../assets/images/team_01.jpg")',
					memberName,
					memberJob,
					aboutTeamMember[memberName],
					1
				)
				changeLanguageInModalTeam()
				openModalTeam()
			} else if (modalLink.dataset.name == 'Алена Бросова') {
				changeTextInModalTeam(
					'url("../assets/images/team_02.jpg")',
					memberName,
					memberJob,
					aboutTeamMember[memberName],
					2
				)
				changeLanguageInModalTeam()
				openModalTeam()
			} else if (modalLink.dataset.name == 'Александра Крюкова') {
				changeTextInModalTeam(
					'url("../assets/images/team_03.jpg")',
					memberName,
					memberJob,
					aboutTeamMember[memberName],
					3
				)
				changeLanguageInModalTeam()
				openModalTeam()
			} else if (modalLink.dataset.name == 'Максим Варешюк') {
				changeTextInModalTeam(
					'url("../assets/images/team_04.jpg")',
					memberName,
					memberJob,
					aboutTeamMember[memberName],
					4
				)
				changeLanguageInModalTeam()
				openModalTeam()
			} else if (modalLink.dataset.name == 'Артем Гавришин') {
				changeTextInModalTeam(
					'url("../assets/images/team_05.jpg")',
					memberName,
					memberJob,
					aboutTeamMember[memberName],
					5
				)
				changeLanguageInModalTeam()
				openModalTeam()
			} else if (modalLink.dataset.name == 'Оксана Травинская') {
				changeTextInModalTeam(
					'url("../assets/images/team_06.jpg")',
					memberName,
					memberJob,
					aboutTeamMember[memberName],
					6
				)
				changeLanguageInModalTeam()
				openModalTeam()
			}
		})
	}
}