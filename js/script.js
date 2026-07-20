const mobileNavbar = document.querySelector(".navbar_mobile");
let mobileNavbarOpen = false;

document.addEventListener("click", (event) => {
	let hamburger;
	if (event.target.closest(".accordion__trigger")) {
		const accordion = event.target.closest(".accordion");
		accordion.classList.toggle("accordion_active");
		const content = accordion.querySelector(".accordion__content");
		content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
	} else if ((hamburger = event.target.closest(".header__hamburger"))) {
		mobileNavbar.classList.toggle("navbar_mobile_active");
		hamburger.classList.toggle("header__hamburger_active");
		mobileNavbarOpen = !mobileNavbarOpen;
	} else if ((!event.target.closest(".navbar_mobile") || event.target.closest(".navbar__menu-link")) && mobileNavbarOpen) {
		mobileNavbar.classList.remove("navbar_mobile_active");
		document.querySelector(".header__hamburger").classList.remove("header__hamburger_active");
		mobileNavbarOpen = false;
	}

	let portfolioCard;
	if ((portfolioCard = event.target.closest(".portfolio__card"))) {
		const anchor = portfolioCard.querySelector(".portfolio__card-link");
		if (anchor) anchor.click();
	}
});