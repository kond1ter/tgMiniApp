import * as RegionsList from "./regions_list.js"

const region_number_div = document.querySelector(".region-number")
const region_name_div = document.querySelector(".header__region-name")
const user_coins = document.querySelector(".user-coins")

export let coins = 100
export let region = 77
export let username = "Username"

user_coins.innerText = coins

export function setUsername(_username) {
    const username_div = document.querySelector(".user-info__name")
    username = _username
    username_div.innerText = username
}

export function setRegion(_region) {
    region = _region
    region_number_div.innerText = region + " регион"
    region_name_div.innerText = RegionsList.regions_list[region]
}

export function getRegionName() {
    return region_name_div.innerText.trim()
}

export function getRegionNumber() {
    return region_number_div.innerText.trim()
}

export function getCoins() {
    return coins
}

export function setCoins() {

}
