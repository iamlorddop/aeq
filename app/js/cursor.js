const cursorRounded = document.querySelector('.rounded')
const hoverItems = document.querySelectorAll('.cursor-hover-item')

function updateCursorPosition(event) {
	cursorRounded.style.top = `${event.clientY}px`;
	cursorRounded.style.left = `${event.clientX}px`;
}

window.addEventListener('mousemove', event => {
	updateCursorPosition(event)
	if (event.target.style.cursor == 'pointer') {
		cursorRounded.classList.add('zoom')
	}
}) 

hoverItems.forEach(item => {
	item.addEventListener('pointerenter', () => cursorRounded.classList.add('zoom'));
	item.addEventListener('pointerleave', () => cursorRounded.classList.remove('zoom'));
})
