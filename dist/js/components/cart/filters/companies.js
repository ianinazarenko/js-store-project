import { getElement } from "../../../utilities/utilities.js";
import { displayProducts } from "../../../utilities/displayProducts.js";

const setupCompanies = (store) => {
    let companies = store.map((item) => item.company);
    companies = ["all", ...new Set(companies)];

    const section = getElement(".products-container");
    const companiesDOM = getElement(".companies");
    companiesDOM.innerHTML = companies
        .map((item) => {
            return `<li class="company-btn">${item}</li>`;
        })
        .join("");

    companiesDOM.addEventListener("click", (e) => {
        if (e.target.classList.contains("company-btn")) {
            const companyFilter = e.target.textContent.toLowerCase();
            if (companyFilter === "all") {
                displayProducts(store, section);
            } else {
                const newStore = store.filter(function (product) {
                    return product.company === companyFilter;
                });
                displayProducts(newStore, section);
            }
        }
    });
};

export default setupCompanies;
