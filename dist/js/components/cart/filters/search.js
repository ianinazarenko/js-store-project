import { getElement } from "../../../utilities/utilities.js";
import { displayProducts } from "../../../utilities/displayProducts.js";
import { setupStore } from "../../../utilities/store.js";

const section = getElement(".products-container");

const setupSearch = (store) => {
    const form = getElement(".search-form");
    const search = getElement(".search-input");

    form.addEventListener("input", () => {
        const searchingItem = search.value.toLowerCase();
        const filteredStore = store.filter((item) =>
            item.name.toLowerCase().startsWith(searchingItem)
        );
        console.log(filteredStore.length);
        displayProducts(filteredStore, section);
        if (filteredStore.length < 1) {
            section.innerHTML = `<h3 class='filter-error'>Sorry, nothing has been found :(</h3>`;
        }
    });
};

export default setupSearch;
