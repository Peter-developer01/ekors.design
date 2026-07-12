function translateElement(element) {
	const key = element.dataset.i18n;
	if (!i18next.exists(key)) {
		console.error("Translation key", key, "not found for element", element);
	}
	element.textContent = i18next.t(element.dataset.i18n);
}

function translateAll() {
	document.querySelectorAll("[data-i18n]").forEach(translateElement);
}

const observer = new MutationObserver(mutations => {
	mutations.forEach(mutation => {
		if (mutation.type === "attributes") {
			translateElement(mutation.target);
			return;
		}

		if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
			mutation.addedNodes.forEach(node => {
				if (node.nodeType === Node.ELEMENT_NODE) {
					if (node.dataset.i18n) {
						translateElement(node);
					}
					// Uncomment if there are ever any translateable elements in added nodes.
					// node.querySelectorAll("[data-i18n]").forEach(translateElement);
				}
			});
		}
	});
});

i18next.use(i18nextBrowserLanguageDetector).init({
	fallbackLng: "ru",
	resources: {
		en: {
			translation: {
				"language-switcher": "RU",
				"home": "Home",
				"about": "About",
				"project-creation": "How a design project is created",
				"portfolio-of-objects": "Portfolio of objects",
				"contacts": "Contacts",
				"tagline-part1": "An interior",
				"tagline-part2": "where you want",
				"tagline-part3": "to stay",
			}
		},
		ru: {
			translation: {
				"language-switcher": "EN",
				"home": "Главная",
				"about": "Обо мне",
				"project-creation": "Как создается дизайн-проект",
				"portfolio-of-objects": "Портфолио объектов",
				"contacts": "Контакты",
				"tagline-part1": "Интерьер,",
				"tagline-part2": "в котором",
				"tagline-part3": "хочется остаться"
			}
		}
	}
}).then(() => {
	translateAll();
	document.body.classList.remove("translating");
	observer.observe(document.body, {
		childList: true,
		subtree: true,
		attributes: true,
		attributeFilter: ["data-i18n"]
	});
}).catch(error => {
	console.error("Translation error:", error);
	document.body.classList.remove("translating");
});
