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
