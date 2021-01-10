import { getElement, formatPrice } from "../../utilities/utilities.js";

const addToCartDOM = ({ id, name, image, price, amount }) => {
    console.log(id, name, image, price, amount);
    console.log(image);

    const section = getElement(".cart-items");

    const article = document.createElement("article");
    article.classList.add("cart-item");
    article.setAttribute("data-id", id);
    article.innerHTML = `<img
                            src="${image}"
                            alt="${name}"
                            class="cart-item-img"
                        />
                        <!-- item info -->
                        <div>
                            <h4 class="cart-item-name">${name}</h4>
                            <p class="cart-item-price">${formatPrice(price)}</p>
                            <button class="cart-item-remove-btn" data-id="${id}">remove</button>
                        </div>
                        <div class="cart-item-amount-controls">
                            <button class="cart-item-increase-btn" data-id="${id}">
                                <i class="fas fa-chevron-up"></i>
                            </button>
                            <p class="cart-item-amount-count" data-id="${id}">${amount}</p>
                            <button class="cart-item-decrease-btn" data-id="${id}">
                                <i class="fas fa-chevron-down"></i>
                            </button>
                        </div>`;
    section.appendChild(article);
};

export default addToCartDOM;
