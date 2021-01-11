import { openCart } from "./toggleCart.js";
import {
    getStorageItem,
    setStorageItem,
    formatPrice,
    getElement,
} from "../../utilities/utilities.js";
import { findProduct } from "../../utilities/store.js";
import addToCartDOM from "./addToCartDOM.js";

// selections
const cartItemCountDOM = getElement(".navbar-cart-amount");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement("#cart-total");

let cart = getStorageItem("cart");

// Add to cart
const addToCart = (id) => {
    let item = cart.find((cartItem) => cartItem.id === id);
    if (item) {
        // add amount
        const amount = increaseAmount(id);
        const cartItems = [
            ...cartItemsDOM.querySelectorAll(".cart-item-amount-count"),
        ];
        const updatingItemAmount = cartItems.find(
            (item) => item.dataset.id === id
        );
        updatingItemAmount.textContent = amount;
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

// Display cart item count
function displayCartItemCount() {
    const amount = cart.reduce(
        (total, current) => (total += current.amount),
        0
    );
    cartItemCountDOM.textContent = amount;
}

// Display total in cart
function displayCartTotal() {
    const total = cart.reduce(
        (total, current) => (total += current.price * current.amount),
        0
    );
    cartTotalDOM.textContent = `Total: ${formatPrice(total)}`;
}

// Display cart items in the cart DOM
function displayCartItemsDOM() {
    cart.forEach((product) => {
        addToCartDOM(product);
    });
}

// Increase amount of one item in the cart
function increaseAmount(id) {
    let newAmount;
    cart.forEach((cartItem) => {
        if (cartItem.id === id) {
            cartItem.amount++;
            newAmount = cartItem.amount;
        }
    });
    return newAmount;
}

// Descrease amount of one item in the cart
function decreaseAmount(id) {
    let newAmount;
    cart.forEach((cartItem) => {
        if (cartItem.id === id) {
            cartItem.amount--;
            newAmount = cartItem.amount;
        }
    });
    return newAmount;
}

// Remove item
function removeItem(id) {
    cart = cart.filter((cartItem) => cartItem.id !== id);
}

// REmove btn, increase and decrease amount
function setupCartFunctionality() {
    cartItemsDOM.addEventListener("click", function (e) {
        const element = e.target;
        const parent = e.target.parentElement;
        const id = element.dataset.id;
        const parentID = parent.dataset.id;

        // remove
        if (element.classList.contains("cart-item-remove-btn")) {
            removeItem(id);
            parent.parentElement.remove();
        }
        // decrease
        if (parent.classList.contains("cart-item-decrease-btn")) {
            const newAmount = decreaseAmount(parentID);
            if (newAmount === 0) {
                removeItem(parentID);
                parent.parentElement.parentElement.remove();
            } else {
                parent.previousElementSibling.textContent = newAmount;
            }
        }
        // increase
        if (parent.classList.contains("cart-item-increase-btn")) {
            const newAmount = increaseAmount(parentID);
            parent.nextElementSibling.textContent = newAmount;
        }

        displayCartItemCount();
        displayCartTotal();
        setStorageItem("cart", cart);
    });
}

// Initial cart functionallity
const init = () => {
    displayCartItemCount();
    displayCartTotal();
    displayCartItemsDOM();
    setupCartFunctionality();

    console.log(cart);
};

init();

export { addToCart };
