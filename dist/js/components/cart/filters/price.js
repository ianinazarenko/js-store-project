import { displayProducts } from "../../../utilities/displayProducts.js";
import { getElement } from "../../../utilities/utilities.js";

const setupPrice = (store) => {
    const priceInput = getElement(".price-filter");
    const priceValue = getElement(".price-value");

    let maxPrice = store.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);
    maxPrice = Math.ceil(maxPrice / 100);
    priceInput.max = maxPrice;
    priceInput.min = 0;
    priceInput.value = maxPrice;
    priceValue.textContent = `Value: $${priceInput.value}`;

    priceInput.addEventListener("input", function () {
        const value = parseInt(priceInput.value);
        priceValue.textContent = `Value: $${value}`;

        let newStore = store.filter((product) => product.price / 100 <= value);
        const section = getElement(".products-container");
        displayProducts(newStore, section);
        if (newStore.length < 1) {
            section.innerHTML = `<h3 class='filter-error'>Sorry, nothing has been found :(</h3>`;
        }
    });
};

export default setupPrice;
