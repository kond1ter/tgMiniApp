import * as Catalog from "./catalog.js";
import * as MainButton from "./main_btn.js";
import * as CartMisc from "./cart_misc.js"

export const cart = [];

export function addToCart(name, date) {
	for (let i = 0; i < cart.length; i++) {
		if (cart[i].name == name) {
			cart[i].date = date;
			return;
		}
	}
	cart.push({
		name: name,
		date: date,
	});
}

export function removeFromCart(name) {
    let index = null

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == name) {
            index = i
            break
        }
    }

	if (index != null) {
		cart.splice(index, 1); // 2nd parameter means remove one item only
	}
}

export function getItemByName(name) {
	for (let i = 0; i < cart.length; i++) {
		if (cart[i].name == name) {
			return cart[i];
		}
	}
	return undefined;
}

const tg = window.Telegram.WebApp;
const back_btn = tg.BackButton;
const body = document.querySelector("#body");
const page_div = document.querySelector(".page");
const cart_div = document.querySelector(".cart");
const cart_items_div = document.querySelector(".cart__items");

function setCartItems() {
    if (cart.length == 0) {
        closeCart()
    }

	cart_items_div.innerHTML = "";

	for (let i = 0; i < cart.length; i++) {
		const item = cart[i];
		const item_name = item.name;
		const item_sel_date = item.date;
		const item_data = Catalog.getCatalogItemByName(item_name);

		let cart_dates_inner = "";
		let cart_sale_inner = "";

		for (let j = 0; j < item_data.dates.length; j++) {
			cart_dates_inner += `
                <div class="cart-item__dates-item 
                ${
					item_data.dates[j] == item_sel_date
						? "cart-item__dates-item_selected"
						: ""
				}">
                    ${item_data.dates[j]}
                </div>
            `;
		}

		if (item_data.sale != 0) {
			cart_sale_inner = `
                <div class="cart-item__sale">
                    <div class="cart-item__sale-sale">-${
						item_data.sale * 100
					}%</div>
                    <div class="cart-item__sale-price">${
						item_data.price
					} ₽</div>
                </div>
            `;
		}

		cart_items_div.innerHTML += `
            <div class="cart-item cart__surface" name="${item_data.name}">
                <div class="cart-item__top">
                    <div class="cart-item__title">ОГЭ: ${item_data.title}</div>
                    <img class="cart-item__cross" src="static/img/cart_cross.svg" alt="">
                </div>
                <div class="cart-item__bottom">
                    <div class="cart-item__dates">
                        ${cart_dates_inner}
                    </div>
                    <div class="cart-item__price 
                    ${item_data.sale == 0 ? "" : "cart-item__price-w-sale"}">
                        ${Math.round(
							item_data.price * (1 - item_data.sale),
							0
						)} ₽
                    </div>
                </div>
                ${item_data.sale == 0 ? "" : cart_sale_inner}
            </div>
        `;
	}

    setCartCrossListeners()
    setCartDatesListeners()
    CartMisc.setOrder()
}

function setCartDatesListeners() {
    const dates = document.querySelectorAll(".cart-item__dates-item")
    
    for (let i = 0; i < dates.length; i++) {
        dates[i].addEventListener("click", () => {
            if (dates[i].classList.contains("cart-item__dates-item_selected")) {
                return
            }
    
            const _date = dates[i].innerText
            const outer_div = dates[i].parentElement
            const local_dates = outer_div.querySelectorAll(".cart-item__dates-item")
            const _name = outer_div.parentElement.parentElement.getAttribute("name")

            for (let j = 0; j < local_dates.length; j++) {
                local_dates[j].classList.remove("cart-item__dates-item_selected")
            }
            dates[i].classList.add("cart-item__dates-item_selected")

            addToCart(_name, _date)
        })
    }
}

function setCartCrossListeners() {
    const crosses = document.querySelectorAll(".cart-item__cross")

    for (let i = 0; i < crosses.length; i++) {
        crosses[i].addEventListener("click", () => {
            const _item = crosses[i].parentElement.parentElement
            const _name = _item.getAttribute("name")
            const _item_height = _item.clientHeight
            _item.style.height = _item_height + "px"
            setTimeout(() => {
                _item.style.height = "0"
                _item.style.padding = "0 12px"
                _item.style.marginBottom = "-8px"
            }, 100)
            setTimeout(() => {
                removeFromCart(_name)
                setCartItems()
                body.style.height = cart_div.scrollHeight + "px";
            }, 250)
        })
    }
}

export function openCart() {
	setCartItems();
	page_div.classList.add("display-none");
	cart_div.classList.remove("display-none");
    body.style.height = cart_div.scrollHeight + "px";
    window.scrollTo(0, 0)
    MainButton.setMainBtn()
	back_btn.show();
}

export function closeCart() {
    Catalog.setCatalog(Catalog.curr_catalog)
	page_div.classList.remove("display-none");
	cart_div.classList.add("display-none");
    body.style.height = page_div.scrollHeight + "px";
    window.scrollTo(0, 0)
    MainButton.setMainBtn()
	back_btn.hide();
}

export function getCartState() {
	return cart_div.classList.contains("display-none") ? false : true;
}
