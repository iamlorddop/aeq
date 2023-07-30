const cursorRounded = document.querySelector('.rounded')

const updateCursorPosition = (event) => {
	cursorRounded.style.top = `${event.clientY}px`;
	cursorRounded.style.left = `${event.clientX}px`;
}

window.addEventListener('mousemove', event => {
	updateCursorPosition(event)
})