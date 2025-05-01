document.addEventListener('DOMContentLoaded', function () {
	const menuButton = document.getElementById('menuButton');
	const dropdown = document.getElementById('dropdown-nav-links');

	menuButton.addEventListener('click', function (event) {
		e.stopPropagation();
		dropdown.classList.toggle('show');
	});

	window.addEventListener('click', function (event) {
		if (!event.target.closest('.dropdown-nav')) {
			dropdown.classList.remove('show');
		}
	});
});
