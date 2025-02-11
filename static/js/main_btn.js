import * as Cart from "./cart.js";
import * as Desc from "./description.js";

const tg = window.Telegram.WebApp;
const main_btn = tg.MainButton;
const desc_div = document.querySelector(".desc");
const cart_div = document.querySelector(".cart");
const region = document.querySelector(".region");

export function setMainBtn() {
	if (
		!desc_div.classList.contains("desc-opened") &&
		!region.classList.contains("region-opened") &&
		cart_div.classList.contains("display-none")
	) {
		if (Cart.cart.length == 0) {
			if (main_btn.isVisible) main_btn.hide();
		} else {
			main_btn.setText(`Открыть корзину (${Cart.cart.length})`);
			main_btn.color = "#007EE5";
			main_btn.textColor = "#FFFFFF";
			if (!main_btn.isVisible) main_btn.show();
		}
	} else if (desc_div.classList.contains("desc-opened")) {
		if (Cart.getItemByName(Desc.subj) != undefined) {
			main_btn.setText("Перейти в корзину →");
			main_btn.color = "#ECF5FF";
			main_btn.textColor = "#007EE5";
			if (!main_btn.isVisible) main_btn.show();
		} else {
			main_btn.setText("Добавить в корзину");
			main_btn.color = "#007EE5";
			main_btn.textColor = "#FFFFFF";
			if (!main_btn.isVisible) main_btn.show();
		}
		if (!main_btn.isVisible) main_btn.show();
	} else if (region.classList.contains("region-opened")) {
        if (main_btn.isVisible) main_btn.hide();
	} else if (!cart_div.classList.contains("display-none")) {
        main_btn.setText("Оплатить");
        main_btn.color = "#007EE5";
        main_btn.textColor = "#FFFFFF";
        if (!main_btn.isVisible) main_btn.show();
    }
}

main_btn.onClick(() => {
	if (!desc_div.classList.contains("desc-opened")) {
        Cart.openCart()
	} else if (desc_div.classList.contains("desc-opened")) {
		if (Cart.getItemByName(Desc.subj) != undefined) {
            Desc.closeDesc()
            Cart.openCart()
		} else {
			Cart.addToCart(Desc.subj, Desc.date);
			setMainBtn();
		}
	}
});
