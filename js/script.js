
const h1 = document.querySelector(".heading-primary");


const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//set the mobile nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
})