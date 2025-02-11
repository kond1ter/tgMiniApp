const body = document.querySelector("#body");
const popup_tint = document.querySelector(".popup-tint");
const coins_popup = document.querySelector(".coins-popup");
const coins_popup_btn = document.querySelector(".coins-popup__btn");
const coins_popup_cross = document.querySelector(".coins-popup-cross");
const vip = document.querySelector(".vip");
const vip_popup = document.querySelector(".vip-popup");
const vip_popup_cross = document.querySelector(".vip-popup-cross");

document.addEventListener("click", (e) => {
	if (e.target.closest(".coin")) {
		openCoinsPopup();
	}
});

popup_tint.addEventListener("click", () => {
	closeCoinsPopup();
	closeVipPopup();
});

coins_popup_btn.addEventListener("click", () => {
	closeCoinsPopup();
});

coins_popup_cross.addEventListener("click", () => {
	closeCoinsPopup();
});

vip.addEventListener("click", () => {
	openVipPopup();
});

vip_popup_cross.addEventListener("click", () => {
	closeVipPopup();
});

export function openCoinsPopup() {
	body.classList.add("body-static");
	popup_tint.classList.remove("popup-tint-hidden");
	coins_popup.classList.remove("popup-hidden");
}

export function closeCoinsPopup() {
	body.classList.remove("body-static");
	popup_tint.classList.add("popup-tint-hidden");
	coins_popup.classList.add("popup-hidden");
}

export function openVipPopup() {
	body.classList.add("body-static");
	popup_tint.classList.remove("popup-tint-hidden");
	vip_popup.classList.remove("popup-hidden");
}

export function closeVipPopup() {
	body.classList.remove("body-static");
	popup_tint.classList.add("popup-tint-hidden");
	vip_popup.classList.add("popup-hidden");
}
