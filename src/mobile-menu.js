const mobileBtn = document.querySelector(".js-mobile-button");
const menu = document.querySelector(".js-mobile-menu");
const header = document.querySelector(".js-header");
const backplate = document.querySelector(".js-mobile-menu__backplate");

export const initMobileMenu = () => {
  mobileBtn.addEventListener("click", () => {
    if (!mobileBtn.hasAttribute("data-open")) {
      openMenu();
    } else {
      closeMenu();
    }
  });
  menu.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("mobile-menu__nav-link")) {
      closeMenu();
    }
  });
};

const closeMenu = () => {
  mobileBtn.removeAttribute("data-open");
  menu.classList.remove("mobile-menu--open");
  header.classList.remove("header__show");
  document.body.classList.remove("scroll-lock");
  mobileBtn.ariaExpanded = false;
};

const openMenu = () => {
  mobileBtn.setAttribute("data-open", "");
  menu.classList.add("mobile-menu--open");
  header.classList.add("header__show");
  document.body.classList.add("scroll-lock");
  mobileBtn.ariaExpanded = true;
};

backplate.addEventListener("click", (e) => {
  e.stopPropagation();
  closeMenu();
});
