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
				"language-switcher": "EN",
				"home": "Home",
				"about-me": "About me",
				"project-creation": "How a design project is created",
				"portfolio-of-objects": "Portfolio of objects",
				"contacts": "Contacts",
				"tagline-part1": "An interior",
				"tagline-part2": "where you want",
				"tagline-part3": "to stay",
				"about-text-part1": "Hello! My name is Elena Korsunskaya. I am an interior designer and decorator. My journey into the profession began with fundamental education (Faculty of Civil Engineering and Environmental Design) and more than 10 years of practice with finishing materials. For many years I was the leading decorator in Marat Ka's studio, where I thoroughly studied the nature of textures and colors.",
				"about-text-part2": "Today I create spaces in which you want to live. My main task is not just to make it beautiful, but to fill the interior with warmth, comfort and character. I love non-standard solutions and am able to listen to the wishes of the customer, turning even the most daring ideas into a harmonious reality. Each of my projects is unique. I am proud that my works are not similar to each other, and my clients feel sincere care in them. I will be glad to meet you and work together on your projects!"
			}
		},
		ru: {
			translation: {
				"language-switcher": "RU",
				"home": "Главная",
				"about-me": "Обо мне",
				"project-creation": "Как создается дизайн-проект",
				"portfolio-of-objects": "Портфолио объектов",
				"contacts": "Контакты",
				"tagline-part1": "Интерьер,",
				"tagline-part2": "в котором",
				"tagline-part3": "хочется остаться",
				"about-text-part1": "Здравствуйте! Меня зовут Елена Корсунская. Я дизайнер интерьеров и декоратор. Мой путь в профессию начался с фундаментального образования (строительный факультет ПГС и факультет Дизайна среды) и более чем 10-летней практики с отделочными материалами. Долгие годы я была ведущим декоратором в студии Марата Ка, где досконально изучила природу фактур и цвета.",
				"about-text-part2": "Сегодня я создаю пространства, в которых хочется жить. Моя главная задача — не просто сделать красиво, а наполнить интерьер теплом, уютом и характером. Я люблю нестандартные решения и умею слышать пожелания заказчика, превращая даже самые смелые идеи в гармоничную реальность. Каждый мой проект — уникален. Я горжусь тем, что мои работы не похожи друг на друга, а клиенты чувствуют в них искреннюю заботу. Буду рада знакомству и совместной работе над вашими проектами!"
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

const languageSwitcher = document.querySelector(".language-switcher");
languageSwitcher.addEventListener("click", () => {
	i18next.changeLanguage(i18next.language === "en" ? "ru" : "en");
	translateAll();
});