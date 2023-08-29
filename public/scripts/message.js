// Fade error message after 4 seconds
// Hide error message after 5 seconds
// Transition duration must be 1 second

const time = 4000;

window.addEventListener('load', () => {
	setTimeout(() => {
		document.querySelector('.message').classList.add('fade-out');
	}, time);

	setTimeout(() => {
		document.querySelector('.message').classList.add('hidden');
	}, time + 900);
})