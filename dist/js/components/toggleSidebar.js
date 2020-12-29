import { getElement } from "../utilities.js";

const toggleBtn = getElement(".navbar-toggle-btn");
const closeSidebarBtn = getElement(".close-btn-sidebar");
const sidebar = getElement(".sidebar-overlay");

toggleBtn.addEventListener("click", (e) => {
    sidebar.classList.add("visible-opacity");
});

closeSidebarBtn.addEventListener("click", (e) => {
    console.log(e.currentTarget);
    sidebar.classList.remove("visible-opacity");
});
