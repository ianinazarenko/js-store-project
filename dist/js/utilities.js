export const getElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;

    throw new Error(`No element has been selected, check your ${selector}`);
};
