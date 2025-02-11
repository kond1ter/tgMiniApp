import * as RegionsList from "./regions_list.js";
import * as User from "./user.js";
import * as Cookie from "./cookie.js";
import * as Desc from "./description.js";
import * as MainButton from "./main_btn.js";

const header_right = document.querySelector(".header__right");
const region = document.querySelector(".region");
const body = document.querySelector("#body");
const region_input = document.querySelector(".region-search-input");
const region_input_cross = document.querySelector(".region-input-cross");
const region_content = document.querySelector(".region-content");
const tg = window.Telegram.WebApp;
const back_btn = tg.BackButton;
region_input.value = "";

header_right.addEventListener("click", () => {
	openRegion();
});

region_input.addEventListener("input", () => {
	if (region_input.value.length > 0) {
		region_input_cross.classList.remove("display-none");
	} else {
		region_input_cross.classList.add("display-none");
	}
});

region_input_cross.addEventListener("click", () => {
	region_input_cross.classList.add("display-none");
	region_input.value = "";
    setRegions(RegionsList.regions_list)
});

region_input.addEventListener("keypress", (e) => {
	if (e.key == "Enter") {
		e.preventDefault();
		e.target.blur();
	}
});

document.addEventListener("click", (e) => {
	if (!e.target.closest(".region-search")) {
		region_input.blur();
	}
    if (e.target.closest(".region-search__input")) {
        if (!e.target.closest(".region-input-cross")) {
            region_input.focus()
        }
    }
});

region_input.addEventListener("input", () => {
	const _regions_list = {};

    if (region_input.value.trim().length == 0) {
        setRegions(RegionsList.regions_list);
        return
    }

	Object.keys(RegionsList.regions_list).forEach((r_id) => {
		if (
			r_id.startsWith(region_input.value) ||
            RegionsList.regions_list[r_id].toLowerCase().trim()
                .startsWith(region_input.value.toLowerCase().trim())
        )
		{
			_regions_list[r_id] = RegionsList.regions_list[r_id];
		}
	})
	setRegions(_regions_list);
});

export function setRegions(regions_list) {
	region_content.innerHTML = "";
    const _regions_list = RegionsList.regions_list
	Object.keys(regions_list).forEach((r_id) => {
		region_content.innerHTML += `
            <div class="region-item">
                <div class="region-item__title">${r_id} регион</div>
                <div class="region-item__subtitle">${_regions_list[r_id]}</div>
            </div>
        `;
	});
    setRegionsListeners()
}

function setRegionsListeners() {
    const regions_divs = document.querySelectorAll(".region-item")
    for (let i = 0; i < regions_divs.length; i++) {
        regions_divs[i].addEventListener("mousedown", () => {
            regions_divs[i].classList.add("region-item_active")
        })
        regions_divs[i].addEventListener("click", () => {
            setTimeout(() => {
                User.setRegion(regions_divs[i].firstElementChild.innerText.split(" ")[0])
                Cookie.setCookie("region", regions_divs[i].firstElementChild.innerText.split(" ")[0], 999)
                closeRegion()
            }, 50)
        })
    }
}

export function openRegion() {
    body.classList.add("body-static")
	region.classList.add("region-opened");
	back_btn.show();
    MainButton.setMainBtn()
}

export function closeRegion() {
    const desc_div = document.querySelector(".desc");

    body.classList.remove("body-static")
	region.classList.remove("region-opened");

    region_input.blur();
    region_input.value = "";
    region_input_cross.classList.add("display-none")
    if (!desc_div.classList.contains("desc-opened")) {
        back_btn.hide();
    } else {
        Desc.setDesc(Desc.subj)
    }
    MainButton.setMainBtn()
    setRegions(RegionsList.regions_list)
}
