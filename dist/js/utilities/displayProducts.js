import { formatPrice } from "./utilities.js";
import { addToCart } from "../components/cart/setupCart.js";

const displayProducts = (products, section) => {
    section.innerHTML = products
        .map((product) => {
            const { id, image, name, price } = product;
            return `<!-- single product -->
                    <article class="product">
                        <div class="product-container">
                            <img
                                src="${image}"
                                class="product-img"
                                alt="${name}"
                            />
                            <div class="product-icons">
                                <a
                                    class="product-details-btn"
                                    href="./product.html?id=${id}"
                                >
                                    <i class="fas fa-search"></i>
                                </a>
                                <button class="product-to-cart-btn" data-id="${id}">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                        <footer>
                            <p class="product-name">${name}</p>
                            <h4 class="product-price">${formatPrice(price)}</h4>
                        </footer>
                    </article>
                    <!-- end of single product -->`;
        })
        .join("");

    section.addEventListener("click", function (e) {
        const element = e.target.parentElement;
        if (element.classList.contains("product-to-cart-btn")) {
            addToCart(element.dataset.id);
        }
    });
};

export { displayProducts };
