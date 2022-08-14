var themes = ['day', 'night']
var body = document.querySelector('body');
var themeToggleButton = document.getElementById('theme-toggle');

const syncTheme = () => {
	let theme = localStorage.getItem('theme');

	if (!theme){
		theme = themes[1];
	}

	switchThemeTo(theme);

	if (theme === themes[1]) {
		themeToggleButton.innerHTML = 'light.';
	} else {
		themeToggleButton.innerHTML = 'dark.';
	}
}

const switchThemeTo = (theme) => {
	if (! themes.includes(theme)) {
		return
	}

	body.className = '';
	body.classList.add(theme);
}

const themeToggle = () => {
	let theme = localStorage.getItem('theme');

	if (theme === themes[0]) {
		localStorage.setItem('theme', themes[1]);
	} else {
		localStorage.setItem('theme', themes[0]);
	}

	syncTheme();
}

const documentOnReady = () => {
	syncTheme()

	themeToggleButton.addEventListener('click', themeToggle);
}

document.addEventListener('DOMContentLoaded', documentOnReady)
