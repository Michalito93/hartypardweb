const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const logoImg = document.querySelector(".logo__image");
const logoText = document.querySelector(".logo__text");
const homePage = document.querySelector(".home-page");
const aboutPage = document.querySelector(".about-page");
const offerPage = document.querySelector(".offer-page");
const contactPage = document.querySelector(".contact-page");
const homeLink = document.querySelector("[data-name='home']");
const aboutLink = document.querySelector("[data-name='about']");
const offerLink = document.querySelector("[data-name='offer']");
const contactLink = document.querySelector("[data-name='contact']");

const openMenu = () => {
  menu.classList.toggle("menu--active");
  logoImg.classList.toggle("logo__image--inactive");
  logoText.classList.toggle("logo__text--active");
  menuBtn.classList.toggle("menu-button--active");
  homePage.classList.toggle("home-page--select");
  aboutPage.classList.toggle("about-page--select");
  offerPage.classList.toggle("offer-page--select");
  contactPage.classList.toggle("contact-page--select");

  document.body.style.overflow == "auto"
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
};

const chooseHome = () => {
  homePage.classList.add("page--active");
  aboutPage.classList.remove("page--active");
  offerPage.classList.remove("page--active");
  contactPage.classList.remove("page--active");
  openMenu();
};

const chooseAbout = () => {
  aboutPage.classList.add("page--active");
  homePage.classList.remove("page--active");
  offerPage.classList.remove("page--active");
  contactPage.classList.remove("page--active");
  openMenu();
};

const chooseOffer = () => {
  offerPage.classList.add("page--active");
  homePage.classList.remove("page--active");
  aboutPage.classList.remove("page--active");
  contactPage.classList.remove("page--active");
  openMenu();
};

const chooseContact = () => {
  contactPage.classList.add("page--active");
  homePage.classList.remove("page--active");
  aboutPage.classList.remove("page--active");
  offerPage.classList.remove("page--active");
  openMenu();
};

menuBtn.addEventListener("click", openMenu);
homeLink.addEventListener("click", chooseHome);
aboutLink.addEventListener("click", chooseAbout);
offerLink.addEventListener("click", chooseOffer);
contactLink.addEventListener("click", chooseContact);
