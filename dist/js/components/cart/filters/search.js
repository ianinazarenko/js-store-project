import { getElement } from "../../../utilities/utilities.js";
import { displayProducts } from "../../../utilities/displayProducts.js";
import { setupStore } from "../../../utilities/store.js";

const setupSearch = (store) => {
    const form = getElement(".search-form");
    const search = getElement(".search-input");

    search.addEventListener("input", (e) => {
        const searchingItem = e.currentTarget.value;
        console.log(searchingItem);
    });
    // const filteredProducts =
};

export default setupStore;
