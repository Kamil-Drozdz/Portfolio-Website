/*style switcher */

const styleSwiitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwiitcherToggle.addEventListener('click', () => {
	document.querySelector('.style-switcher').classList.toggle('open');
});
