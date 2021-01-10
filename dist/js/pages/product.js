// global imports
import "../components/toggleSidebar.js";
import "../components/cart/toggleCart.js";
import "../components/cart/setupCart.js";

// specific imports
import { addToCart } from "../components/cart/setupCart.js";
import {
    singleProductUrl,
    getElement,
    formatPrice,
} from "../utilities/utilities.js";

// selections
const loading = getElement(".page-loading");
const singleProductSection = getElement(".single-product");
const pageTitleDOM = getElement(".page-header-title");
const imageDOM = getElement(".single-product-img img");
const productNameDOM = getElement(".single-product-name");
const companyNameDOM = getElement(".single-product-company");
const priceDOM = getElement(".single-product-price");
const descriptionDOM = getElement(".single-product-description");
const colorsDOM = getElement(".single-product-colors");
const addToCartBtn = getElement(".single-product-add-to-cart-btn");

// cart product
let productID;

// show product when page loaded
document.addEventListener("DOMContentLoaded", async function () {
    loading.style.display = "none";
    const urlID = location.search;
    const responce = await fetch(singleProductUrl + urlID).catch((err) =>
        console.log(err)
    );

    if (responce.status >= 200 && responce.status <= 299) {
        const product = await responce.json();

        // displaying product
        const {
            id,
            fields: { colors, company, description, image, name, price },
        } = product;

        productID = id;
        const img = image[0].thumbnails.large.url;

        document.title = `${name.toUpperCase()} | Comfy`;
        pageTitleDOM.innerHTML = `Home / ${name}`;
        imageDOM.src = img;
        productNameDOM.textContent = name;
        companyNameDOM.textContent = `By ${company}`;
        priceDOM.textContent = formatPrice(price);
        descriptionDOM.textContent = description;
        colors.forEach((color) => {
            const span = document.createElement("span");
            span.classList.add("single-product-color");
            span.style.backgroundColor = color;
            colorsDOM.appendChild(span);
        });
    } else {
        console.log(responce.status, responce.statusText);
        singleProductSection.innerHTML = `
        <div class="page-error section section-centered">
            <h2>Sorry, something went wrong</h2>
            <a class="error-btn" href="./index.html">Back home</a>
        </div>`;
    }
});

addToCartBtn.addEventListener("click", function () {
    addToCart(productID);
});

// все обработчики промисов, такие как then, catch возвращают промис. Результат возврата их callback ф-ции передается в качестве resolve в следующий обрабочик (или передается ошибка в качестве reject). Вернуть данные, например, объект - нельзя, можно только сделать что-нибудь с ним внутри callback, например, вызвать функцию и передать в нее в качестве аргумента результат промиса.

// fetch(url)
//         .then((responce) => responce.json())
//         .then((product) => displayProduct(product))
//         .catch((err) => {
//             throw new Error(err);
//         });

//     function displayProduct(product) {
//         // код выводящий на страницу данные из HTTP Request
//     }
