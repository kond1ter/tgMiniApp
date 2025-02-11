import * as Catalog from "./catalog.js";
import * as User from "./user.js";
import * as MainButton from "./main_btn.js";
import * as Cart from "./cart.js";
import * as Region from "./region.js";

const tg = window.Telegram.WebApp;
const back_btn = tg.BackButton;
const desc_div = document.querySelector(".desc");

export function setCatalogItemsListeners() {
	const catalog_item = document.querySelectorAll(".catalog-item");
	for (let i = 0; i < catalog_item.length; i++) {
		catalog_item[i].addEventListener("click", (e) => {
			if (
				!e.target.closest(".coin") &&
				!e.target.closest(".catalog-item__btn")
			) {
				setDesc(catalog_item[i].getAttribute("name"));
				openDesc();
			}
		});
	}
}
const desc_sale = document.querySelector(".desc-price__sale");
const desc_image = document.querySelector(".desc-image__image");
const desc_subject = document.querySelector(".desc__subject");
const desc_price = document.querySelector(".desc-price__price");
const desc_percent = document.querySelector(".desc-price__percent");
const desc_old_price = document.querySelector(".desc-price__old-price");
const desc_coins = document.querySelector(".desc-coins__coins");
const desc_coins_percent = document.querySelector(".desc-coins__percent");
const desc_region = document.querySelector(".desc-region__region-text");
const desc_region_div = document.querySelector(".desc-region__region");
const desc_desc = document.querySelector(".desc-desc__desc");
const desc_dates = document.querySelector(".desc-dates__dates");
export let subj = "";
export let date = "";
export let sel_date = "";

export function setDesc(name) {
	const item = Catalog.getCatalogItemByName(name);
	if (+item.sale == 0) {
		desc_price.classList.remove("desc-price__price-w-sale");
		desc_sale.classList.add("display-none");
	} else {
		desc_price.classList.add("desc-price__price-w-sale");
		desc_sale.classList.remove("display-none");
	}
	desc_image.src = `static/img/subjects/${item.name}.png`;
	desc_subject.innerText = `ОГЭ: ${item.title}`;
	desc_price.innerText = `${Math.round(item.price * (1 - item.sale), 0)} ₽`;
	desc_percent.innerText = `-${item.sale * 100}%`;
	desc_old_price.innerText = `${item.price} ₽`;
	desc_coins.innerText = `+${Math.round(
		item.price * (1 - item.sale) * item.coins,
		0
	)}`;
	desc_coins_percent.innerText = `(${item.coins * 100}%)`;
	desc_region.innerText = `${User.getRegionNumber()}, ${User.getRegionName()}`;
	desc_desc.innerText = item.description;
	desc_dates.innerHTML = "";
	subj = item.name;

	let sel_date_i = 0;
	if (Cart.getItemByName(name) == undefined) {
		const _sel_date = document.querySelector(".date-selected");
		if (_sel_date != undefined) {
			sel_date = _sel_date.innerText;
		} else {
			sel_date = "";
		}

		for (let i = 0; i < item.dates.length; i++) {
			if (item.dates[i] == sel_date) {
				sel_date_i = i;
			}
		}
	} else {
		const i_date = Cart.getItemByName(name).date;
		for (let i = 0; i < item.dates.length; i++) {
			if (item.dates[i] == i_date) {
				sel_date_i = i;
			}
		}
	}

	for (let i = 0; i < item.dates.length; i++) {
		const _date = item.dates[i];
		desc_dates.innerHTML += `
            <div class="desc-dates__date-item 
                ${i == sel_date_i ? "desc-date__selected" : ""}">
                ${_date}
            </div>
        `;
	}

	desc_region_div.addEventListener("click", () => {
		Region.openRegion();
	});

	date = document.querySelector(".desc-date__selected").innerText;
	setDescDatesListeners();
}

function setDescDatesListeners() {
	const _dates = document.querySelectorAll(".desc-dates__date-item");

	for (let i = 0; i < _dates.length; i++) {
		const _date = _dates[i];
		_date.addEventListener("click", () => {
			const date_sel = document.querySelector(".desc-date__selected");
			if (!_date.classList.contains("desc-date__selected")) {
				date_sel.classList.remove("desc-date__selected");
				_date.classList.add("desc-date__selected");
				date = document.querySelector(".desc-date__selected").innerText;

				if (Cart.getItemByName(subj) != undefined) {
					Cart.addToCart(subj, date);
				}
			}
		});
	}
}

export function openDesc() {
	desc_div.style.opacity = "1";
	desc_div.classList.add("desc-opened");
	back_btn.show();
	MainButton.setMainBtn();
}

export function closeDesc() {
	Catalog.setCatalog(Catalog.curr_catalog);
	desc_div.classList.remove("desc-opened");
	setTimeout(() => {
		desc_div.style.opacity = "0";
	}, 200);
	back_btn.hide();
	setTimeout(() => {
		MainButton.setMainBtn();
	}, 100);
}
