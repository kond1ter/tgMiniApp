import * as Desc from "./description.js";
import * as Cart from "./cart.js";
import * as MainButton from "./main_btn.js";

export const catalog = {
	content: [
		{
			name: "math",
			title: "Математика",
			price: 800,
			sale: 0.2,
			coins: 0.05,
			dates: ["31 мая", "1 июня"],
			description: `Ответы на ОГЭ по истории представляют собой ключевой элемент экзамена, который оценивает уровень знаний учащихся в области истории. В рамках ОГЭ по истории можно встретить различные типы заданий, включающие в себя анализ исторических событий, определение причин и последствий исторических процессов, анализ карт и схем, определение хронологии событий и многие другие.
Школьникам необходимо продемонстрировать знание ключевых периодов истории, умение аргументировать свои выводы с использованием фактов и аргументов, умение выражать свои мысли четко и логично. Они также должны показать умение находить связи между различными историческими событиями, анализировать причины и последствия исторических процессов, а также использовать исторические источники для аргументации своих ответов.
            Эффективная подготовка к ОГЭ по истории включает в себя изучение школьной программы, чтение исторических источников, тщательный анализ карт и схем, тренировку навыков анализа и обобщения информации, а также разработку стратегий написания ответов на типовые задания экзамена.
            Успешное выполнение заданий по истории на ОГЭ позволит школьнику продемонстрировать свои знания и умения в области истории, а также развить навыки анализа и логического мышления, что важно для успешной сдачи экзамена.`,
		},
		{
			name: "chemistry",
			title: "Химия",
			price: 1000,
			sale: 0.1,
			coins: 0.05,
			dates: ["28 мая", "2 июня"],
			description: `Ответы на ОГЭ по истории представляют собой ключевой элемент экзамена, который оценивает уровень знаний учащихся в области истории. В рамках ОГЭ по истории можно встретить различные типы заданий, включающие в себя анализ исторических событий, определение причин и последствий исторических процессов, анализ карт и схем, определение хронологии событий и многие другие.
Школьникам необходимо продемонстрировать знание ключевых периодов истории, умение аргументировать свои выводы с использованием фактов и аргументов, умение выражать свои мысли четко и логично. Они также должны показать умение находить связи между различными историческими событиями, анализировать причины и последствия исторических процессов, а также использовать исторические источники для аргументации своих ответов.
Эффективная подготовка к ОГЭ по истории включает в себя изучение школьной программы, чтение исторических источников, тщательный анализ карт и схем, тренировку навыков анализа и обобщения информации, а также разработку стратегий написания ответов на типовые задания экзамена.
Успешное выполнение заданий по истории на ОГЭ позволит школьнику продемонстрировать свои знания и умения в области истории, а также развить навыки анализа и логического мышления, что важно для успешной сдачи экзамена.`,
		},
		{
			name: "literature",
			title: "Литература",
			price: 800,
			sale: 0,
			coins: 0.05,
			dates: ["30 мая", "31 мая"],
			description: `Ответы на ОГЭ по истории представляют собой ключевой элемент экзамена, который оценивает уровень знаний учащихся в области истории. В рамках ОГЭ по истории можно встретить различные типы заданий, включающие в себя анализ исторических событий, определение причин и последствий исторических процессов, анализ карт и схем, определение хронологии событий и многие другие.
Школьникам необходимо продемонстрировать знание ключевых периодов истории, умение аргументировать свои выводы с использованием фактов и аргументов, умение выражать свои мысли четко и логично. Они также должны показать умение находить связи между различными историческими событиями, анализировать причины и последствия исторических процессов, а также использовать исторические источники для аргументации своих ответов.
Эффективная подготовка к ОГЭ по истории включает в себя изучение школьной программы, чтение исторических источников, тщательный анализ карт и схем, тренировку навыков анализа и обобщения информации, а также разработку стратегий написания ответов на типовые задания экзамена.
Успешное выполнение заданий по истории на ОГЭ позволит школьнику продемонстрировать свои знания и умения в области истории, а также развить навыки анализа и логического мышления, что важно для успешной сдачи экзамена.`,
		},
		{
			name: "physics",
			title: "Физика",
			price: 1000,
			sale: 0,
			coins: 0.05,
			dates: ["29 мая"],
			description: `Ответы на ОГЭ по истории представляют собой ключевой элемент экзамена, который оценивает уровень знаний учащихся в области истории. В рамках ОГЭ по истории можно встретить различные типы заданий, включающие в себя анализ исторических событий, определение причин и последствий исторических процессов, анализ карт и схем, определение хронологии событий и многие другие.
Школьникам необходимо продемонстрировать знание ключевых периодов истории, умение аргументировать свои выводы с использованием фактов и аргументов, умение выражать свои мысли четко и логично. Они также должны показать умение находить связи между различными историческими событиями, анализировать причины и последствия исторических процессов, а также использовать исторические источники для аргументации своих ответов.
Эффективная подготовка к ОГЭ по истории включает в себя изучение школьной программы, чтение исторических источников, тщательный анализ карт и схем, тренировку навыков анализа и обобщения информации, а также разработку стратегий написания ответов на типовые задания экзамена.
Успешное выполнение заданий по истории на ОГЭ позволит школьнику продемонстрировать свои знания и умения в области истории, а также развить навыки анализа и логического мышления, что важно для успешной сдачи экзамена.`,
		},
	],
};

export let curr_catalog = {}

const dates_div = document.getElementsByClassName("search__dates")[0];

let dates = [];
for (let i = 0; i < catalog["content"].length; i++) {
	for (let j = 0; j < catalog["content"][i]["dates"].length; j++) {
		dates.push(catalog["content"][i]["dates"][j]);
	}
}

const _dates = new Set(dates);
dates = Array.from(_dates);
dates.sort();

for (let i = 0; i < dates.length; i++) {
	dates_div.insertAdjacentHTML(
		"afterbegin",
		`<div class="dates__item">${dates[i]}</div>`
	);
}

export function getCatalogItemByName(name) {
	for (let i = 0; i < catalog["content"].length; i++) {
		const item = catalog["content"][i];
		if (item.name == name) return item;
	}
}

export function filterCatalogByDate(catalog, date) {
	const _catalog = [];

	for (let i = 0; i < catalog["content"].length; i++) {
		const item = catalog["content"][i];
		if (item["dates"].includes(date)) {
			_catalog.push(item);
		}
	}
	return _catalog;
}

export function filterCatalogByName(catalog, name) {
	const _catalog = [];

	for (let i = 0; i < catalog["content"].length; i++) {
		const item = catalog["content"][i];
		if (
			item["title"]
				.toLowerCase()
				.trim()
				.startsWith(name.toLowerCase().trim())
		) {
			_catalog.push(item);
		}
	}
	return _catalog;
}

export function searchInCatalog() {
	const search_input = document.getElementsByClassName("search-input")[0];
	const selected = document.getElementsByClassName("date-selected")[0];
	const input = search_input.value;

	let _catalog = filterCatalogByName(catalog, input);
	if (selected != undefined) {
		_catalog = filterCatalogByDate(
			{ content: _catalog },
			selected.innerText.trim()
		);
		setCatalog({ content: _catalog });
	} else {
		setCatalog({ content: _catalog });
	}
}

function setCatalogItemsBtnListeners() {
	const btns = document.querySelectorAll(".catalog-item__btn");

	for (let i = 0; i < btns.length; i++) {
		const btn = btns[i];
		btn.addEventListener("click", () => {
            if (!btn.classList.contains("btn-accent")) {
                btn.classList.add("btn-accent")
                btn.innerText = "Добавлено"
                const name = btn.parentElement.getAttribute("name")
                let date = ""
                const sel_date = document.querySelector(".date-selected")
                if (sel_date == undefined) {
                    date = getCatalogItemByName(name).dates[0]
                } else {
                    date = sel_date.innerText
                }
                Cart.addToCart(name, date);
                MainButton.setMainBtn()
            } 
		});
	}
}

export function setCatalog(catalog) {
    curr_catalog = catalog
	const catalog_div = document.getElementsByClassName("catalog")[0];
	catalog_div.innerHTML = "";

	for (let i = 0; i < catalog["content"].length; i++) {
		const item = catalog["content"][i];
		const price = item["price"];
		const sale = item["sale"];
		const coins = item["coins"];
		const title = item["title"];
		const name = item["name"];
		const dates = item["dates"];

		catalog_div.innerHTML += `
            <div class="catalog-item" name="${name}">
                <div class="catalog-item__head">
                    <img src="static/img/subjects/${name}.png" alt="">
                    <div class="catalog-item__exam">ОГЭ</div>
                    <div class="catalog-item__dates">${dates.join(", ")}
                </div>
                </div>
                <div class="catalog-item__body">
                    <div class="catalog-item__name">${title}</div>
                    <div class="catalog-item__body-bottom">
                        <div class="catalog-item__price 
                        ${sale == 0 ? "" : "display-none"}">
                            ${price} ₽
                        </div>
                        <div class="catalog-item__sale-price
                        ${sale == 0 ? "display-none" : ""}">
                            ${Math.round(price * (1 - sale), 0)} ₽
                        </div>
                        <div class="catalog-item__coins coin">
                            +${Math.round(
								coins * price * (1 - sale),
								0
							)} <img src="static/img/coin.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="catalog-item__sale">
                    <span class="sale__sale
                    ${sale == 0 ? "display-none" : ""}">
                        -${sale * 100}%</span>
                    <span class="sale__price
                    ${sale == 0 ? "display-none" : ""}">
                        ${price} ₽</span>
                </div>
                <div class="catalog-item__btn
                ${Cart.getItemByName(name) != undefined ? "btn-accent" : ""}">
                    ${Cart.getItemByName(name) != undefined ? "Добавлено" : "В корзину"}
                </div>
            </div>
        `;
	}
	Desc.setCatalogItemsListeners();
	setCatalogItemsBtnListeners();
}
