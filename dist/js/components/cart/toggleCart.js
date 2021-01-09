import { getElement } from "../../utilities/utilities.js";

const toggleCartBtn = getElement(".navbar-cart-btn");
const cartOverlay = getElement(".cart-overlay");
const cart = getElement(".cart");
const closeCartBtn = getElement(".close-btn-cart");

const openCart = () => {
    cartOverlay.classList.add("visible-opacity");
    cart.classList.add("visible-translate");
};

const closeCart = () => {
    cart.classList.remove("visible-translate");
    setTimeout(() => {
        cartOverlay.classList.remove("visible-opacity");
    }, 500);
};

toggleCartBtn.addEventListener("click", openCart);

closeCartBtn.addEventListener("click", closeCart);

cartOverlay.addEventListener("click", (e) => {
    if (e.target === cartOverlay) {
        closeCart();
    }
});

export { openCart };
