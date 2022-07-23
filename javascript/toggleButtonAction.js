const toggle_button = document.querySelector('.toggle_button');

toggle_button.addEventListener('click', function() { //open-menu-button is clicked - show animation
	this.classList.toggle('is-active');
});