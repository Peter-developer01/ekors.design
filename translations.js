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
				"hello-world": "Hello, World!"
			}
		},
		ru: {
			translation: {
				"hello-world": "Привет, мир!"
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