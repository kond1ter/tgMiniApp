import * as Desc from "./description.js";
import * as Region from "./region.js";
import * as Cart from "./cart.js";

const tg = window.Telegram.WebApp;
const back_btn = tg.BackButton;
const desc_div = document.querySelector(".desc")
const cart_div = document.querySelector(".cart")
const region = document.querySelector(".region");

back_btn.onClick(() => {
    if (region.classList.contains("region-opened")) {
        Region.closeRegion()
    } else if (desc_div.classList.contains("desc-opened")) {
        Desc.closeDesc()
    } else if (!cart_div.classList.contains("display-none")) {
        Cart.closeCart()
    }
});
