const goto = (name) => {
	if (!name) return false;

	const links = {
		email: { type: 'external', url:'mailto:dapino.dev@gmail.com' },
		resume: { type: 'external', url: '' },
		vooka: { type: 'external', url: 'https://vookav2.github.io' },
		codewars: { type: 'external', url: 'https://www.codewars.com/users/mr687' },
		npm: { type: 'external', url: 'https://www.npmjs.com/~mr687' },
		youtube: { type: 'external', url: 'https://www.youtube.com/channel/UCZoJY-3dj0ZybKE353Hbnlw' },
		linkedin: { type: 'external', url: 'https://www.linkedin.com/in/daphino/' },
		'github-mr687': { type: 'external', url: 'https://github.com/mr687' },
		'github-web': { type: 'external', url: 'https://github.com/mr687/mr687.github.io' },
		'github-songlyrics': { type: 'external', url: 'https://github.com/vookav2/songlyrics' },
		'npm-songlyrics': { type: 'external', url: 'https://www.npmjs.com/package/songlyrics' },
	}

	const link = links[name];
	if (!link) return false;

	if (link.type === 'external') {
		window.open(link.url, '_blank');
		return;
	} else if (type === 'internal') {
		window.location.href = `/${link.url}`;
	}
}

const tabDetail = document.querySelectorAll('#experience .detail .item');
const tabList = document.querySelectorAll('#experience .tabs .item');
let currentIndex = 0;
const switchWorkTabTo = (tabIndex = 0) => {
	if (tabIndex < 0 || tabIndex >= tabDetail.length) return;

	const currentDetail = tabDetail[currentIndex];
	const targetDetail = tabDetail[tabIndex];
	const currentTab = tabList[currentIndex];
	const targetTab = tabList[tabIndex];

	currentDetail.classList.remove('active');
	currentTab.classList.remove('active');
	targetDetail.classList.add('active');
	targetTab.classList.add('active');

	currentIndex = tabIndex;
}

const navSidebar = document.querySelector('#header .navigation');

const openSidebar = () => {
	navSidebar.style.display = 'block';
}

const closeSidebar = () => {
	navSidebar.style.display = 'none';
}

const appRoot = document.getElementById('app');

const handleOnLoaded = () => {
	const linkHtmls = document.querySelectorAll('a.link');
	linkHtmls.forEach(link => {
		link.setAttribute('href', 'javascript:void(0);');
	})

	appRoot.classList.remove('loading');
}

document.addEventListener('DOMContentLoaded', handleOnLoaded);
