// Display a confirmation prompt after a reset button is clicked
// Button must have name set as "reset"

document.querySelector('button[name = "reset"]').addEventListener('click', (event) => {
	if (!window.confirm("Are you sure you want to reset?")) {
		event.preventDefault();
	}
})