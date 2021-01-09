export const allProductsUrl =
    "https://course-api.com/javascript-store-products";
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
export const singleProductUrl =
    "https://course-api.com/javascript-store-single-product";

export const getElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;

    throw new Error(`No element has been selected, check your ${selector}`);
};

export const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
};

export const getStorageItem = (item) => {
    const storageItem = localStorage.getItem(item);
    if (storageItem) {
        return JSON.parse(storageItem);
    }
    return [];
};

export const formatPrice = (price) => {
    let formatedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format((price / 100).toFixed(2));
    return formatedPrice;
};
