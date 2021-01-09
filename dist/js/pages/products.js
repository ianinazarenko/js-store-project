// global imports
import "../components/toggleSidebar.js";
import "../components/cart/toggleCart.js";
import "../components/cart/setupCart.js";

// filters imports
import setupSearch from "../components/cart/filters/search.js";
import setupCompanies from "../components/cart/filters/companies.js";
import setupPrice from "../components/cart/filters/price.js";

// specific imports
import { getElement } from "../utilities/utilities.js";
import { store } from "../utilities/store.js";
import { displayProducts } from "../utilities/displayProducts.js";

const loading = getElement(".page-loading");

displayProducts(store, getElement(".products-container"));
setupSearch(store);
setupCompanies(store);
setupPrice(store);

loading.style.display = "none";
