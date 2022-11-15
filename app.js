/*color theme picker */
const textColor = getComputedStyle(document.body).getPropertyValue('--skin-color');
const resetBtn = document.querySelector('.reset');
const textColorPicker = document.querySelector('.color-picker');
const skills = document.querySelector('.skills');
const themeOptions = [textColorPicker];
const url = 'https://api.quotable.io/random';

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
	mainNavLinks.forEach(links => {
		let fromTop = window.scrollY + 270;
		let section = document.querySelector(links.hash);
		if (section.offsetTop <= fromTop === section.offsetTop + section.offsetHeight >= fromTop) {
			links.classList.add('active');
		} else {
			links.classList.remove('active');
		}
	});
});

/*Typing animation */
let typed = new Typed('.typing', {
	strings: ['Web Designer', 'Web Developer', 'Front-end Developer'],
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
/* preloader screen */
window.addEventListener('load', () => {
	document.getElementById('preloader');
	setTimeout(() => {
		preloader.classList.add('loaded');
	}, 3350);
});
//random quotes in loading screen

function generateQuote() {
	fetch(url)
		.then(function (data) {
			return data.json();
		})
		.then(function (data) {
			document.querySelector('.quote').innerHTML = data.content;
			document.querySelector('.author').innerHTML = '- ' + data.author;
		})
		.catch(function (err) {
			console.log(err);
		});
}
generateQuote();

//animation responsive toggle nav
const navLinks = document.querySelector('.aside .nav');
const toggleNav = document.querySelector('.aside .nav-toggler');
const links = document.querySelectorAll('.aside .nav li');

toggleNav.addEventListener('click', () => {
	navLinks.classList.toggle('open');
	toggleNav.classList.toggle('is-active');
});

//effect show element on scroll
document.addEventListener('scroll', () => {
	if (window.pageYOffset > 670) {
		skills.classList.add('open');
		skills.style.display = 'block';
	} else {
		skills.style.display = 'none';
	}
});

//music
const music = document.querySelector('.music');
const switchMusicIcon = document.querySelector('.switcher-music');
let isPlaying = false;

switchMusicIcon.addEventListener('click', () => {
	switchMusicIcon.querySelector('i').classList.toggle('fa-pause');
	switchMusicIcon.querySelector('i').classList.toggle('fa-music');
});
window.addEventListener('load', () => {
	if (document.body.classList.contains('.switcher-music')) {
		switchMusicIcon.querySelector('i').classList.add('fa-pause');
	} else {
		switchMusicIcon.querySelector('i').classList.add('fa-music');
	}
});

function togglePlay() {
	if (isPlaying) {
		music.pause();
	} else {
		music.play();
	}
}

music.onplaying = function () {
	isPlaying = true;
};
music.onpause = function () {
	isPlaying = false;
};

//modal look history
var modal = document.querySelector('.modal');
var trigger = document.querySelector('.trigger');
var closeButton = document.querySelector('.close-button');

function toggleModal() {
	modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

function changeLanguageTo(lang) {
	if (lang == 'PL') {
		window.location.href = 'https://www.kamildrozdz.pl/en.html';
	} else {
		window.location.href = 'https://www.kamildrozdz.pl/';
	}
}

function toggleIconLang() {
	var iconLang = document.getElementById('iconLang');
	if (iconLang.innerHTML === 'PL') {
		iconLang.innerHTML = 'EN';
	} else {
		iconLang.innerHTML = 'PL';
	}
}

function toggleAll(lang) {
	toggleIconLang();
	changeLanguageTo(lang);
}
