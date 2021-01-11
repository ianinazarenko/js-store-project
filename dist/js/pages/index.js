// global imports
import "../components/toggleSidebar.js";
import "../components/cart/toggleCart.js";
import "../components/cart/setupCart.js";

// specific imports for the page
import { getElement } from "../utilities/utilities.js";
import fetchProducts from "../utilities/fetchProducts.js";
import { store, setupStore } from "../utilities/store.js";
import { displayProducts } from "../utilities/displayProducts.js";

// async sintacsys
// const initArrow = async () => {};
// async function initDeclaration() {}
// const initExpression = async function () {};

const init = async function () {
    const products = await fetchProducts();
    setupStore(products);
    const featured = store.filter((item) => item.featured);
    displayProducts(featured, getElement(".featured .products-container"));
};

window.addEventListener("DOMContentLoaded", init);
