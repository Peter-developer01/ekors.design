function translateElement(element) {
	const key = element.dataset.i18n;
	if (!i18next.exists(key)) {
		console.error("Translation key", key, "not found for element", element);
		return;
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
				"made-by": "Made by",
				"footer-creator": "Peter Kolosov",
				"home": "Home",
				"about-me": "About me",
				"project-creation": "How a design project is created",
				"portfolio-of-objects": "Portfolio of objects",
				"contacts": "Contacts",
				"tagline-part1": "An interior",
				"tagline-part2": "where you want",
				"tagline-part3": "to stay",
				"hello-exclamation": "Hello!",
				"about-text-part1": "My name is Elena Korsunskaya. I am an interior designer and decorator. My journey into the profession began with fundamental education (Faculty of Civil Engineering and Environmental Design) and more than 10 years of practice with finishing materials. For many years I was the leading decorator in Marat Ka's studio, where I thoroughly studied the nature of textures and colors.",
				"about-text-part2": "Today I create spaces in which you want to live. My main task is not just to make it beautiful, but to fill the interior with warmth, comfort and character. I love non-standard solutions and am able to listen to the wishes of the customer, turning even the most daring ideas into a harmonious reality. Each of my projects is unique. I am proud that my works are not similar to each other, and my clients feel sincere care in them. I will be glad to meet you and work together on your projects!",
				"invitation-text": "I invite you to my \"live\" studio.\nIt is not just an address on the map - it is a working space where projects are born.",
				"invitation-address": "Residential complex \"Lesobereznyj\", Krasnogorsk, Nikolo-Uryupino, Polkovnika Glazunov, 15",
				"project-creation-step1-title": "Getting to know each other",
				"project-creation-step2-title": "Conclusion of an agreement",
				"project-creation-step3-title": "Site visit",
				"project-creation-step4-title": "Development of technical specificartions (TOR). Concept Definition",
				"project-creation-step5-title": "Planning decisions",
				"project-creation-step6-title": "3D visualization",
				"project-creation-step7-title": "Working documentation",
				"project-creation-step1-content": "Meeting (in person or online) to get to know the customer and the object. We discuss lifestyle, habits, tasks, dreams and deadlines.",
				"project-creation-step2-content": "Fixation of all agreements, approval of the work schedule and design costs.",
				"project-creation-step3-content": "Professional measurements of premises, photo and video recording to accurately link future solutions to real walls.",
				"project-creation-step4-content": "Detailed discussion of wishes regarding style, color scheme, functional areas and engineering tasks.\nSystematization of all customer requirements and building codes into a single document for further work.",
				"project-creation-step5-content": "Creating 2–3 options for arranging furniture and partitions. Joint discussion, adjustment and selection of the optimal plan.",
				"project-creation-step6-content": "Development of realistic 3D images of the interior, taking into account the approved technical specifications, selected materials and color palette.",
				"project-creation-step7-content": "Preparation of a complete package of drawings, diagrams and statements for builders (electrical plans, plumbing plans, furniture diagrams, specifications of materials).",
				"portfolio-card1-title": "Two-story cottage for a family of 4 people",
				"portfolio-card2-title": "Two-story house for a family of 6 people",
				"portfolio-card3-title": "Four-room apartment",
				"portfolio-card4-title": "Two-room apartment for a young couple",
				"portfolio-card5-title": "Three-room apartment for a family of 3 with arched windows",
				"portfolio-card6-title": "Bold two-room apartment for mother and daughter",
				"portfolio-card7-title": "Two-room apartment in a Khrushchev-era building, for mother and daughter",
				"portfolio-card8-title": "One-story guest house",
				"portfolio-card9-title": "Reconstruction of a car showroom",
				"portfolio-card10-title": "Studio apartment for a young girl",
				"portfolio-card11-title": "Two-room apartment for a married couple",
				"portfolio-card12-title": "One-story house for a family of 3 people",
				"portfolio-card13-title": "Trinity",
				"portfolio-card14-title": "Office for a construction company",
				"portfolio-card15-title": "Vernadskogo",
				"portfolio-card1-address": "SNT \"Golden Ranet\"",
				"portfolio-card2-address": "Chekhov",
				"portfolio-card3-address": "Residential complex \"Life Mitinskaya Ecopark\"",
				"portfolio-card4-address": "In a “late Stalinist” building",
				"portfolio-card5-address": "Sergiev Posad",
				"portfolio-card6-address": "Pavlovskaya Sloboda",
				"portfolio-card7-address": "Moscow, st. Kirpichnaya",
				"portfolio-card8-address": "Trekhgorka village",
				"portfolio-card9-address": "",
				"portfolio-card10-address": "Residential complex \"Danish Quarter\"",
				"portfolio-card11-address": "LCD Trinity",
				"portfolio-card12-address": "SNT \"Zarya\"",
				"portfolio-card13-address": "",
				"portfolio-card14-address": "Moscow",
				"portfolio-card15-address": "",
				"contact-address": "Moscow, Moscow Oblast",
				"bedroom": "Bedroom",
				"bedroom-lounge": "Bedroom-lounge",
				"bedroom-cabinet": "Bedroom/cabinet",
				"bedroom-1": "Bedroom 1",
				"bedroom-2": "Bedroom 2",
				"bedroom-3": "Bedroom 3",
				"hall": "Hall",
				"hallway": "Hallway",
				"living-room": "Living room",
				"master-bathroom": "Master bathroom",
				"bathroom": "Bathroom",
				"bathroom-sanuzel": "Bathroom (sanuzel)",
				"bathroom-sanuzel-1": "Bathroom (sanuzel) 1",
				"bathroom-sanuzel-2": "Bathroom (sanuzel) 2",
				"floor-1": "Floor 1",
				"floor-2": "Floor 2",
				"grandmother-room": "Bedroom",
				"kitchen": "Kitchen",
				"kitchen-lounge": "Kitchen-lounge",
				"corridor": "Corridor",
				"playroom": "Playroom",
				"playroom-1": "Playroom 1",
				"playroom-2": "Playroom 2",
				"dressing-room": "Dressing room",
				"nightly-renders": "Evening renders",
				"nightly": "Evening",
				"evening": "Evening",
				"balcony": "Balcony",
				"cabinet": "Cabinet",
				"terrace": "Terrace",
				"toilet": "Toilet",
			}
		},
		ru: {
			translation: {
				"language-switcher": "RU",
				"made-by": "Разработано",
				"footer-creator": "Петром Колосовым",
				"home": "Главная",
				"about-me": "Обо мне",
				"project-creation": "Как создаётся дизайн-проект",
				"portfolio-of-objects": "Портфолио объектов",
				"contacts": "Контакты",
				"tagline-part1": "Интерьер,",
				"tagline-part2": "в котором",
				"tagline-part3": "хочется остаться",
				"hello-exclamation": "Здравствуйте!",
				"about-text-part1": "Меня зовут Елена Корсунская. Я дизайнер интерьеров и декоратор. Мой путь в профессию начался с фундаментального образования (строительный факультет ПГС и факультет Дизайна среды) и более чем 10-летней практики с отделочными материалами. Долгие годы я была ведущим декоратором в студии Марата Ка, где досконально изучила природу фактур и цвета.",
				"about-text-part2": "Сегодня я создаю пространства, в которых хочется жить. Моя главная задача — не просто сделать красиво, а наполнить интерьер теплом, уютом и характером. Я люблю нестандартные решения и умею слышать пожелания заказчика, превращая даже самые смелые идеи в гармоничную реальность. Каждый мой проект — уникален. Я горжусь тем, что мои работы не похожи друг на друга, а клиенты чувствуют в них искреннюю заботу. Буду рада знакомству и совместной работе над вашими проектами!",
				"invitation-text": "Приглашаю Вас в свою «живую» студию.\nЭто не просто адрес на карте - это рабочее пространство, где рождаются проекты.",
				"invitation-address": "ЖК \"Лесобережный\", Красногорск, Николо-Урюпино, ул. Полковника Глазунова, 15",
				"project-creation-step1-title": "Знакомство",
				"project-creation-step2-title": "Заключение договора",
				"project-creation-step3-title": "Выезд на объект",
				"project-creation-step4-title": "Разработка технического задания (ТЗ). Определение концепции",
				"project-creation-step5-title": "Планировочные решения",
				"project-creation-step6-title": "3D-визуализация",
				"project-creation-step7-title": "Рабочая документация",
				"project-creation-step1-content": "Встреча (очная или онлайн) для знакомства с заказчиком и объектом. Обсуждаем образ жизни, привычки, задачи, мечты и сроки.",
				"project-creation-step2-content": "Фиксация всех договоренностей, утверждение графика работ и стоимости проектирования.",
				"project-creation-step3-content": "Профессиональный обмер помещений, фото- и видеофиксация для точной привязки будущих решений к реальным стенам.",
				"project-creation-step4-content": "Детальное обсуждение пожеланий по стилистике, цветовой гамме, функциональным зонам и инженерным задачам.\nСистематизация всех требований заказчика и строительных норм в единый документ для дальнейшей работы.",
				"project-creation-step5-content": "Создание 2–3 вариантов расстановки мебели и перегородок. Совместное обсуждение, корректировка и выбор оптимального плана.",
				"project-creation-step6-content": "Разработка реалистичных 3D-изображений интерьера с учетом утвержденного ТЗ, подобранных материалов и цветовой палитры.",
				"project-creation-step7-content": "Подготовка полного пакета чертежей, схем и ведомостей для строителей (планы электрики, сантехники, схем мебели, спецификация материалов).",
				"portfolio-card1-title": "Двухэтажный коттедж для семьи из 4-х человек",
				"portfolio-card2-title": "Двухэтажный дом для семьи из 6 человек",
				"portfolio-card3-title": "Четырехкомнатная квартира",
				"portfolio-card4-title": "Двухкомнатная квартира для молодой пары",
				"portfolio-card5-title": "Трёхкомнатная квартира для семьи из 3-х человек с арочными окнами",
				"portfolio-card6-title": "Смелая двухкомнатная квартира для мамы с дочкой",
				"portfolio-card7-title": "Двухкомнатная квартира в доме хрущевской застройки, для мамы с дочкой",
				"portfolio-card8-title": "Одноэтажный гостевой дом",
				"portfolio-card9-title": "Реконструкция автосалона",
				"portfolio-card10-title": "Квартира студия для молодой девушки",
				"portfolio-card11-title": "Двухкомнатная квартира для семейной пары",
				"portfolio-card12-title": "Одноэтажный дом для семьи из 3-х человек",
				"portfolio-card13-title": "Тринити",
				"portfolio-card14-title": "Офис для строительной компании",
				"portfolio-card15-title": "Вернадского",
				"portfolio-card1-address": "СНТ «Золотой ранет»",
				"portfolio-card2-address": "г. Чехов",
				"portfolio-card3-address": "ЖК «Life Митинская Ecopark»",
				"portfolio-card4-address": "В доме «позднесталинской» застройки",
				"portfolio-card5-address": "г. Сергиев Посад",
				"portfolio-card6-address": "Павловская Слобода",
				"portfolio-card7-address": "г. Москва, ул. Кирпичная",
				"portfolio-card8-address": "Посёлок Трёхгорка",
				"portfolio-card9-address": "",
				"portfolio-card10-address": "ЖК «Датский квартал»",
				"portfolio-card11-address": "ЖК Тринити",
				"portfolio-card12-address": "СНТ «Заря»",
				"portfolio-card13-address": "",
				"portfolio-card14-address": "г. Москва",
				"portfolio-card15-address": "",
				"contact-address": "Москва, МО",
				"bedroom": "Спальня",
				"bedroom-lounge": "Спальня-гостиная",
				"bedroom-cabinet": "Спальня/кабинет",
				"bedroom-1": "Спальня 1",
				"bedroom-2": "Спальня 2",
				"bedroom-3": "Спальня 3",
				"hall": "Холл",
				"hallway": "Прихожая",
				"living-room": "Гостиная",
				"master-bathroom": "Мастер ванна",
				"bathroom": "Ванная",
				"bathroom-sanuzel": "Санузел",
				"bathroom-sanuzel-1": "Санузел 1",
				"bathroom-sanuzel-2": "Санузел 2",
				"floor-1": "Этаж 1",
				"floor-2": "Этаж 2",
				"grandmother-room": "Спальня",
				"kitchen": "Кухня",
				"kitchen-lounge": "Кухня-гостиная",
				"corridor": "Коридор",
				"playroom": "Детская",
				"playroom-1": "Детская 1",
				"playroom-2": "Детская 2",
				"dressing-room": "Гардеробная",
				"nightly-renders": "Вечерние рендеры",
				"nightly": "Вечерние",
				"evening": "Вечер",
				"balcony": "Балкон",
				"cabinet": "Кабинет",
				"terrace": "Терраса",
				"toilet": "Туалет",
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