const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const logoImg = document.querySelector(".logo__image");
const logoText = document.querySelector(".logo__text");
const homePage = document.querySelector(".home-page");

const openMenu = () => {
  menu.classList.toggle("menu--active");
  logoImg.classList.toggle("logo__image--inactive");
  logoText.classList.toggle("logo__text--active");
  menuBtn.classList.toggle("menu-button--active");
  homePage.classList.toggle("page--select");
};

menuBtn.addEventListener("click", openMenu);
