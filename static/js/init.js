import * as Catalog from "./catalog.js"; 
import * as Region from "./region.js"; 
import * as RegionsList from "./regions_list.js"; 
import * as User from "./user.js"; 
import * as Cookie from "./cookie.js"; 
import * as Desc from "./description.js";  
import * as Cart from "./cart.js";  
import * as Popup from "./popup.js";  
import "./search.js";  
import "./main_btn.js";  
import "./back_btn.js";  
import "./cart_misc.js";  
 
 
const tg = window.Telegram.WebApp; 
const desc_div = document.querySelector(".desc"); 
 
try { 
    console.log(tg.WebAppInitData.user) 
	const username = tg.initDataUnsafe.user.username; 
	User.setUsername(username); 
} catch { 
	// no catches 
} 

fetch("get_subjects", {})
    .then((response) => response.json())
    .then((data) => {
        console.log("get_subjects")
        console.log(data)
    })

fetch("get_userdata", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "user_id": 611460859 })
})
    .then((response) => response.json())
    .then((data) => {
        console.log("get_userdata")
        console.log(data)
    })

fetch("check_promocode", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "promocode": "TEST" })
})
    .then((response) => response.json())
    .then((data) => {
        console.log("check_promocode")
        console.log(data)
    })

document.addEventListener("keydown", (e) => {
	if (e.key == "Escape") {
		e.preventDefault();
        const popups = document.querySelectorAll(".popup-hidden")
        if (popups.length < 2) {
            Popup.closeCoinsPopup();
            Popup.closeVipPopup();
        } else {
            Region.closeRegion();
            Desc.closeDesc();
        }
	}
    if (e.code == "Space") {
        if (desc_div.classList.contains("desc-opened")) {
            e.preventDefault();
			Cart.addToCart(Desc.subj, Desc.date);
        }
    }
    if (e.key == "Tab") {
        e.preventDefault()
        if (Cart.getCartState() == false) {
            Cart.openCart()
        } else {
            Cart.closeCart()
        }
    }
});

Catalog.setCatalog(Catalog.catalog);
Region.setRegions(RegionsList.regions_list);

if (Cookie.getCookie("region") == false) {
	Cookie.setCookie("region", User.region, 999);
} else {
	User.setRegion(+Cookie.getCookie("region"));
}

const body = document.querySelector("#body");
body.style.height = body.clientHeight + "px";
