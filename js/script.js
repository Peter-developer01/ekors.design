document.addEventListener("click", (event) => {
	if (event.target.closest(".accordion__trigger")) {
		const accordion = event.target.closest(".accordion");
		accordion.classList.toggle("accordion_active");
		const content = accordion.querySelector(".accordion__content");
		content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
	}
});