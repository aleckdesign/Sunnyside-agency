const nav = document.querySelector("#nav");
const burgerMenu = document.querySelector(".header__menu");
const container = document.querySelector(".container");

burgerMenu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const classes = ["nav open", "burger", "nav__list", "nav__link", "btn-nav"];

container.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (!classes.includes(e.target.className)) {
    console.log("bob");
    nav.classList.remove("open");
  }
});
