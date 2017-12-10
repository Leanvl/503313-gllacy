var contacts = document.querySelector(".map-contacts-btn");

var popup = document.querySelector(".modal-wrap");
var close = document.querySelector(".modal-close");
var link = document.querySelector(".login-link");
var loginform = document.querySelector(".login-form");
var search = document.querySelector(".search");
var searchform = document.querySelector(".search-form");


contacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback");
});

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (loginform.classList.contains("modalwindow-visible")) {
		loginform.classList.remove("modalwindow-visible");
	} else {
		loginform.classList.add("modalwindow-visible");
	}
});

search.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (searchform.classList.contains("modalwindow-visible")) {
		searchform.classList.remove("modalwindow-visible");
	} else {
		searchform.classList.add("modalwindow-visible");
	}
});
