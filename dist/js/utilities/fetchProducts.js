import { allProductsUrl } from "./utilities.js";

const fetchProducts = async function () {
    const response = await fetch(allProductsUrl).catch((err) => {
        throw Error(err);
    });
    if (response) {
        const products = await response.json();
        return products;
    }
    return;
};

export default fetchProducts;
