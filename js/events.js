function ready() {
	var fadeElem = document.querySelectorAll('.navbar-dropdown');
	var body = document.body;
	var navbar = document.querySelector('.navbar');
	var banner = document.querySelector('.banner__content');
	var advantages = document.querySelectorAll('.advantages__elem');

	animation();

	window.onscroll = function() {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled > 210) {
			fade();
		};
	};

	body.onclick = function(e) {
		if (e.target.classList.contains('whatsup')) {
			fadeElem[0].style.display = 'block';
			fadeElem[1].style.display = 'none';
		} else if (e.target.classList.contains('work')) {
			fadeElem[1].style.display = 'block';
			fadeElem[0].style.display = 'none';
		} else {
			fadeElem[0].style.display = 'none';
			fadeElem[1].style.display = 'none';
		}
	};

	function animation() {
		navbar.style.top = 0 + 'px';
		banner.style.top = 0 + 'px';
	}

	function fade() {
		for (var i = 0; i < advantages.length; i++) {
			advantages[i].style.transform = 'scale(1)';
		}
	}
}

document.addEventListener("DOMContentLoaded", ready);
