import * as Catalog from "./catalog.js";

const search_input = document.getElementsByClassName("search-input")[0];
const input_cross = document.getElementsByClassName("input-cross")[0];
const dates = document.getElementsByClassName("dates__item");
search_input.value = "";

input_cross.addEventListener("click", () => {
	search_input.value = "";
	input_cross.classList.add("display-none");
	Catalog.searchInCatalog();
});

search_input.addEventListener("change", (e) => {
	e.target.blur();
});

search_input.addEventListener("input", () => {
	if (search_input.value.length > 0) {
		input_cross.classList.remove("display-none");
	} else {
		input_cross.classList.add("display-none");
	}
	Catalog.searchInCatalog();

	const page = document.querySelector(".page");
	const body = document.querySelector("#body");
	const page_height = page.clientHeight;
	body.style.height = `${page_height}px`;
});

search_input.addEventListener("keypress", (e) => {
	if (e.key == "Enter") {
		e.preventDefault();
		e.target.blur();
	}
});

document.addEventListener("click", (e) => {
	if (!e.target.closest(".search")) {
		search_input.blur();
	} 
    if (e.target.closest(".search__input")) {
        if (!e.target.closest(".input-cross")) {
            search_input.focus()
        }
    }
});

for (let i = 0; i < dates.length; i++) {
	dates[i].addEventListener("click", (e) => {
		if (e.target.classList.contains("date-selected")) {
			e.target.classList.remove("date-selected");
		} else {
			for (let j = 0; j < dates.length; j++) {
				dates[j].classList.remove("date-selected");
			}
			e.target.classList.add("date-selected");
		}

		Catalog.searchInCatalog();
		const page = document.querySelector(".page");
		const body = document.querySelector("#body");
		const page_height = page.clientHeight;
		body.style.height = `${page_height}px`;
	});
}
