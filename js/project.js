Fancybox.bind();
document.addEventListener("click", (event) => {
	if (event.target.matches(".close-button")) {
		window.location.href = "../#portfolio";
	}
});