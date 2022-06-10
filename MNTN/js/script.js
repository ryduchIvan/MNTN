const burgerMenu = document.querySelector(`.burger_menu`);
const mobileMenu = document.querySelector(`.mobile_menu`);
const mobileNav = document.querySelector(`.mobile_nav`);
const body = document.querySelector(`body`);
console.log(body);
burgerMenu.addEventListener(`click`, function (event) {
	mobileMenu.classList.toggle(`show-mobile-menu`)
	mobileNav.classList.toggle(`show-mobile-nav`)
	burgerMenu.classList.toggle(`show-burger-menu`)
	body.classList.toggle(`lock`);
})

const images = document.querySelectorAll(`img`);

const options = {
	root: null,
	rootMargin: "360px",
	threshold: 0.1
}

function hendleImg(images, observer) {
	images.forEach(img => {
		console.log(img.intersectionRatio);
		if (img.intersectionRatio > 0) {
			loadImage(img.target);
		}
	})
}

function loadImage(images) {
	images.src = images.getAttribute(`data`);
}

const observer = new IntersectionObserver(hendleImg, options);

images.forEach(img => {
	observer.observe(img);
})