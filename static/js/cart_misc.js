
import * as Cart from "./cart.js"
import * as Catalog from "./catalog.js"
import * as User from "./user.js"

const promo_div = document.querySelector(".cart__promo")
const promo_inp_wrapper = document.querySelector(".promo__input-wrapper")
const promo_inp = document.querySelector(".promo__input")
const promo_inp_cross = document.querySelector(".promo__input-cross")
const promo_btn = document.querySelector(".promo__btn")
const coins_switch = document.querySelector(".cart-coins__switch")
const coins_switch_inner = document.querySelector(".cart-coins__switch-inner")
const promo_error = document.querySelector(".promo__error")
const coins_amount = document.querySelector(".coins-amount")
const coins_pass_amount = document.querySelector(".coins-pass-amount")
const coins_div = document.querySelector(".cart__coins")
const topay_price = document.querySelector(".topay__price")
promo_inp.value = ""


let promo = 0
let coins_pass = 0
let use_coins = false

const order_list = document.querySelector(".order__list")
const body = document.querySelector("#body");
const cart_div = document.querySelector(".cart");

function setCoins(price) {
    coins_div.classList.remove("display-none")
    const coins = User.getCoins()

    if (coins > price - 100) {
        coins_pass = price - 100
        if (coins_pass < 0) coins_pass = 0
    } else {
        coins_pass = coins
    } 
    
    if (coins_pass == 0) {
        coins_div.classList.add("display-none")
    } else {
        coins_amount.innerText = coins
        coins_pass_amount.innerText = coins_pass
    }
}

export function setOrder() {
    order_list.innerHTML = ""
    
    let price = 0
    let order_length = 0
    let sale = 0
    let promo_sale = 0

    order_length = Cart.cart.length
    for (let i = 0; i < Cart.cart.length; i++) {
        const price_i = Catalog.getCatalogItemByName(Cart.cart[i].name).price
        sale += Catalog.getCatalogItemByName(Cart.cart[i].name).sale * price_i
        price += price_i
    }

    promo_sale = Math.round((price - sale) * promo, 2)
    sale = Math.round(sale, 2)
    setCoins(price - sale - promo_sale)

    let add_coins = 0
    for (let i = 0; i < Cart.cart.length; i++) {
        const item = Catalog.getCatalogItemByName(Cart.cart[i].name)
        let _price = item.price
        const _sale = item.sale
        const _coins = item.coins
        _price = _price * (1 - _sale) * (1 - promo)
        if (use_coins) {
            const coins_k = coins_pass / order_length / _price
            _price = _price * (1 - coins_k)
        }
        add_coins += _price * _coins
    }

    order_list.innerHTML += `
        <div class="order-list__item order-price-item">
            <div class="order-list-item__label">
                Предметы (<span class="order-price-label">${order_length}</span> шт.)
            </div>
            <div class="order-list-item__value order-price">${Math.round(price, 0)} ₽</div>
        </div>
    `

    if (sale != 0) {
        order_list.innerHTML += `
            <div class="order-list__item order-sale-item">
                <div class="order-list-item__label">
                    Скидка
                </div>
                <div class="order-list-item__value order-sale">-${Math.round(sale, 0)} ₽</div>
            </div>
        `    
    }


    if (promo_sale != 0) {
        order_list.innerHTML += `
            <div class="order-list__item order-promo-item">
                <div class="order-list-item__label">
                    Промокод
                </div>
                <div class="order-list-item__value order-promo">-${Math.round(promo_sale, 0)} ₽</div>
            </div>
        `    
    }

    if (use_coins != 0) {
        order_list.innerHTML += `
            <div class="order-list__item order-coins-sale-item">
                <div class="order-list-item__label">
                    Скидка баллами
                </div>
                <div class="order-list-item__value order-coins-sale">-${Math.round(coins_pass, 0)} ₽</div>
            </div>
        `    
    }

    order_list.innerHTML += `
        <div class="order-list__item order-coins-item">
            <div class="order-list-item__label">
                Баллы к начислению
            </div>
            <div class="order-list-item__value"><span class="order-coins">+${Math.round(add_coins, 0)}</span>
            <img src="static/img/coin.svg" alt=""></div>
        </div>
    `

    topay_price.innerText = `${price - sale - promo_sale - (use_coins ? coins_pass : 0)} ₽`
    body.style.height = cart_div.scrollHeight + "px";
}

function checkPromo(_promo) {
    // TODO check promo func
    if (promo_inp.value.toLowerCase() == "test") {
        promo = 0.2
        setOrder()
        promo_div.classList.add("promo_accepted")
    } else {
        promo_error.classList.remove("display-none")
    }
}

promo_inp_wrapper.addEventListener("click", (e) => {
    if (!promo_div.classList.contains("promo_accepted") && 
        !e.target.closest(".promo__input-cross")) {
        promo_inp.focus()
    }
})

promo_inp.addEventListener("input", () => {
    promo_error.classList.add("display-none")
    if (promo_inp.value.length != 0) {
        promo_btn.classList.remove("promo__btn_hidden")
    } else {
        promo_btn.classList.add("promo__btn_hidden")
    }

    const input = promo_inp.value
    const output = input.toUpperCase()
    promo_inp.value = output
})

promo_inp.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        promo_inp.blur()
    }
})

promo_btn.addEventListener("click", () => {
    checkPromo(promo_inp.value)
})

promo_inp_cross.addEventListener("click", () => {
    promo_inp.value = ""
    promo_btn.classList.add("promo__btn_hidden")
    promo_div.classList.remove("promo_accepted")
    promo_inp.blur()
    promo = 0
    setOrder()
})

document.addEventListener("click", (e) => {
    if (e.target.closest(".cart-coins__switch")) {
        coins_switch.classList.toggle("cart-coins__switch_enabled")
        coins_switch_inner.classList.toggle("cart-coins__switch-inner_enabled")

        coins_switch.setAttribute(
            "value",
            coins_switch.getAttribute("value") == "0" ? "1" : "0"
        )

        use_coins = coins_switch.getAttribute("value") == "0" ? false : true
        setOrder()
    }

    if (!e.target.closest(".promo__input-wrapper")) {
        promo_inp.blur()
    }
})
