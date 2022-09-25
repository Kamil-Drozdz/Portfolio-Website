/*color theme picker */
const textColor = getComputedStyle(document.body).getPropertyValue('--skin-color');
const resetBtn = document.querySelector('.reset');
const textColorPicker = document.querySelector('.color-picker');
const themeOptions = [textColorPicker];

themeOptions.forEach(function (option) {
	option.addEventListener('change', event => {
		document.body.style.setProperty(option.dataset.themeValue, event.target.value);
	});
});

resetBtn.addEventListener('click', () => document.body.style.setProperty('--skin-color', '#FF0000'));

/* Active nav follower */
let mainNavLinks = document.querySelectorAll('.aside .nav li a');
let mainSections = document.querySelectorAll('.aside .nav');

window.addEventListener('scroll', () => {
	let fromTop = window.scrollY;

	mainNavLinks.forEach(link => {
		let section = document.querySelector(link.hash);

		if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
});

/*Typing animation */
let typed = new Typed('.typing', {
	strings: ['Web Designer', 'Web Developer', 'Front-end Developer', 'nie wiadomo co j:D'],
	typeSpeed: 100,
	BackSpeed: 60,
	loop: true,
});

/*style switcher */

const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
	document.querySelector('.style-switcher').classList.toggle('open');
});

window.addEventListener('scroll', () => {
	document.querySelector('.style-switcher').classList.contains('open');
	document.querySelector('.style-switcher').classList.remove('open');
});
/* Theme night/light */
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
	dayNight.querySelector('i').classList.toggle('fa-sun');
	dayNight.querySelector('i').classList.toggle('fa-moon');
	document.body.classList.toggle('dark');
});
window.addEventListener('load', () => {
	if (document.body.classList.contains('dark')) {
		dayNight.querySelector('i').classList.add('fa-sun');
	} else {
		dayNight.querySelector('i').classList.add('fa-moon');
	}
});
