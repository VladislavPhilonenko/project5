window.onload = function () {
	var fade = document.querySelectorAll('.navbar-dropdown');
	var body = document.body;
	var navbar = document.querySelector('.navbar');
	var banner = document.querySelector('.banner__content');
	var advantages = document.querySelectorAll('.advantages__elem');

	animation();

	body.addEventListener('scroll', function(e) {
		if (window.pageYOffset > 228) {
			scroll();
			alert('heloo');
		};
	}

	body.addEventListener('onclick', function())

	body.onclick = function(e) {
		if (e.target.classList.contains('whatsup')) {
			fade[0].style.display = 'block';
			fade[1].style.display = 'none';
		} else if (e.target.classList.contains('work')) {
			fade[1].style.display = 'block';
			fade[0].style.display = 'none';
		} else {
			fade[0].style.display = 'none';
			fade[1].style.display = 'none';
		}
	}

	function animation() {
		navbar.style.top = 0 + 'px';
		banner.style.top = 0 + 'px';
	}

	function scroll() {
		for (var i = 0; i < advantages.length; i++) {
			advantages[i].style.opacity = 1;
		}
	}
}
