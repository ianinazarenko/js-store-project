import { openCart } from "./toggleCart.js";
import {
    getStorageItem,
    setStorageItem,
    formatPrice,
    getElement,
} from "../../utilities/utilities.js";
import { findProduct } from "../../utilities/store.js";
import addToCartDOM from "./addToCartDOM.js";

const cartItemCountDOM = getElement(".navbar-cart-amount");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement("#cart-total");

let cart = getStorageItem("cart");

const addToCart = (id) => {
    let item = cart.find((cartItem) => cartItem.id === id);
    if (item) {
        // add amount
    } else {
        let product = findProduct(id);
        product = { ...product, amount: 1 };
        cart.push(product);
        // add item
        addToCartDOM(product);
    }

    displayCartItemCount();
    displayCartTotal();

    setStorageItem("cart", cart);
    openCart();
};

function displayCartItemCount() {
    const amount = cart.reduce(
        (total, current) => (total += current.amount),
        0
    );
    cartItemCountDOM.textContent = amount;
}

function displayCartTotal() {
    const total = cart.reduce(
        (total, current) => (total += current.price * current.amount),
        0
    );
    cartTotalDOM.textContent = `Total: ${formatPrice(total)}`;
}

const init = () => {
    console.log(cart);
};

init();

export { addToCart };
