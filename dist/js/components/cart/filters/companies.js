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

// Reduce имеет два аргумента - ф-цию callback, которую выполняет один раз для каждого элемента массива (за исключением пустот) и initialValue - начальное значение. Callback принимает 4 аргумента: accum, current, index, array. Accum для первого элемента равняется initialValue или 0, если initialValue не был указан. Для последующих вызовов accum равняется тому, что было возвращено callback ф-цией. Обычно в эту переменную записывают промежуточный результат (складывают значения - можно прибавлять числа, а можно запушить в массив currentItem, если initialValue массив)

// const newCompanies = companies.reduce(
//     (accum, current, index) => {
//         // console.log(accum, current, index);
//         if (!accum.includes(current)) {
//             accum.push(current);
//         }

//         return accum;
//     },
//     ["all"]
// );
