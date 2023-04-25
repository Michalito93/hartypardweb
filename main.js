const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

const openMenu = () => {
  menu.classList.toggle("menu--active");
};

menuBtn.addEventListener("click", openMenu);
