import '../scss/main.scss';
import 'boxicons';

AOS.init();

const navBar = document.querySelector('nav');

const changeNavColor = () => {
	const scrollValue = window.scrollY;

	if (scrollValue >= 300) {
		navBar.classList.add('navScroll');
	} else {
		navBar.classList.remove('navScroll');
	}
};

window.addEventListener('scroll', changeNavColor);
