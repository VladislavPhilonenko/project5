function ready() {
	var fadeElem = document.querySelectorAll('.navbar-dropdown');
	var body = document.body;
	var navbar = document.querySelector('.navbar');
	var banner = document.querySelector('.banner__content');
	var workPlanSector = document.querySelector('.work-plan');
	var advantagesSelector = document.querySelector('.advantages');
	var advantages = document.querySelectorAll('.advantages__elem');
	var workPlanElements = document.querySelectorAll('.work-plan__elem');

	window.onscroll = function() {
		var getAdvantagesCoord = advantagesSelector.getBoundingClientRect();
		var getWorkPlanCoord = workPlanSector.getBoundingClientRect();
		var workPlanSectorTop = getWorkPlanCoord.top;
		var advantagesSelectorTop = getAdvantagesCoord.top;
		if (advantagesSelectorTop < 200) {
			advantages.forEach(function(item, i, arr) {
				setTimeout(function() {
					arr[i].style.transform = 'scale(1)';
				}, 200 * i)
			})
		};
		if (workPlanSectorTop < 200 ) {
			workPlanElements.forEach(function(item, i, arr) {
				setTimeout(function() {
					arr[i].style.opacity = 1;
		 			arr[i].style.left = 0 + 'px';
				}, 500 * i)
			})
		}
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

	animation();

	function animation() {
		navbar.style.top = 0 + 'px';
		banner.style.top = 0 + 'px';
	};
}

document.addEventListener("DOMContentLoaded", ready);
