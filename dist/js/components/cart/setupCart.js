import { openCart } from "./toggleCart.js";

const addToCart = (id) => {
    console.log(`Added to the cart with id ${id}!`);
    openCart();
};

export { addToCart };
