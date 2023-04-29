const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const logoImg = document.querySelector(".logo__image");
const logoText = document.querySelector(".logo__text");
const homePage = document.querySelector(".home-page");
const aboutPage = document.querySelector(".about-page");
const homeLink = document.querySelector("[data-name='home']");
const aboutLink = document.querySelector("[data-name='about']");

const openMenu = () => {
  menu.classList.toggle("menu--active");
  logoImg.classList.toggle("logo__image--inactive");
  logoText.classList.toggle("logo__text--active");
  menuBtn.classList.toggle("menu-button--active");
  homePage.classList.toggle("home-page--select");
  aboutPage.classList.toggle("about-page--select");

  document.body.style.overflow == "auto"
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
};

const chooseHome = () => {
  homePage.classList.add("page--active");
  homePage.style.zIndex = "1";
  aboutPage.classList.remove("page--active");
  aboutPage.style.zIndex = "0";
  openMenu();
};

const chooseAbout = () => {
  aboutPage.classList.add("page--active");
  aboutPage.style.zIndex = "1";
  homePage.classList.remove("page--active");
  homePage.style.zIndex = "0";
  openMenu();
};

menuBtn.addEventListener("click", openMenu);
homeLink.addEventListener("click", chooseHome);
aboutLink.addEventListener("click", chooseAbout);
