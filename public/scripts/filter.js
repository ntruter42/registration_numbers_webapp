window.addEventListener('load', () => {
	const select = document.querySelector('select[name="town-filter"]');
	const scroll = document.querySelector('.scroll.icon');
	const display = document.querySelector('.reg-display');
	const plates = display.querySelectorAll('.reg-plate');
	const empty = display.querySelector('.no-plates');

	// TODO: clear reg-display, add only reg-plates from town-filter
	// EDIT: start page with all reg-plates hidden
	// remove hidden class from reg-plates containing town_code title
	function filterByTown(event) {
		if (event) {
			const scrollDiff = Math.sign(event.deltaY);
			const index = select.selectedIndex + scrollDiff;
			if (index >= 0 && index < select.options.length) {
				select.selectedIndex = index;
			}
		}

		let option = select.options[select.selectedIndex];
		let count = 0;

		plates.forEach(plate => {
			plate.classList.add('hidden');
			if (plate.title === option.value || option.value === 'AA') {
				plate.classList.remove('hidden');
				count++;
			}
		});

		empty.classList.add('hidden');
		if (count === 0) {
			empty.classList.remove('hidden');
		}
	}

	filterByTown();
	select.addEventListener('change', filterByTown);
	select.addEventListener('wheel', function (event) {
		filterByTown(event);
	});
	scroll.addEventListener('wheel', function (event) {
		filterByTown(event);
	});
});