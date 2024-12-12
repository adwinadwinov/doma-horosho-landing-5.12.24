var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) =>
  key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : (obj[key] = value);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class Tabs {
  constructor({ tabSelector, repaintOnresize }) {
    __publicField(this, "_tabComponent");
    __publicField(this, "_tabPanels");
    __publicField(this, "_tabTriggers");
    __publicField(this, "_currentTab");
    __publicField(this, "_indicatorSlide");
    this._tabComponent = document.querySelector(tabSelector || ".tabs");
    this._initTabs();
    if (repaintOnresize) {
      this._resizeControl();
    }
  }
  _initTabs() {
    this._tabTriggers = Array.from(this._tabComponent.querySelectorAll(".tabs-triggers__btn"));
    this._tabPanels = Array.from(this._tabComponent.querySelectorAll(".tabs-content__panel"));
    this._indicatorSlide = this._tabComponent.querySelector(".tabs-indicator__slide");
    this._currentTab = this._tabTriggers.find((trigger) => trigger.dataset.value === this._tabComponent.dataset.defaultValue);
    this._changeActiveTab(this._currentTab);
    this._tabTriggers.forEach((tabTrigger) => {
      tabTrigger.addEventListener("click", (e) => {
        this._changeActiveTab(e.target);
      });
    });
  }
  _resizeControl() {
    window.addEventListener("resize", () => {
      this._handleIndicator(this._currentTab);
    });
  }
  _changeActiveTab(trigger) {
    if (trigger.classList.contains("tabs-triggers__btn--active")) return;
    const value = trigger.dataset.value;
    const targetTab = this._tabPanels.find((panel) => panel.dataset.value === value);
    this._tabPanels.forEach((panel) => {
      if (panel.classList.contains("tabs-content__panel--active")) {
        panel.classList.remove("tabs-content__panel--active");
      }
    });
    this._tabTriggers.forEach((trigger2) => {
      if (trigger2.classList.contains("tabs-triggers__btn--active")) {
        trigger2.classList.remove("tabs-triggers__btn--active");
      }
    });
    targetTab.classList.add("tabs-content__panel--active");
    trigger.classList.add("tabs-triggers__btn--active");
    this._handleSelectedAccessibility(trigger);
    this._currentTab = trigger;
    this._handleIndicator(trigger);
  }
  _handleSelectedAccessibility(target) {
    this._tabTriggers.forEach((trigger) => {
      trigger.ariaSelected = false;
    });
    target.ariaSelected = true;
  }
  _handleIndicator(trigger) {
    document.fonts.ready.then(() => {
      const width = this._currentTab.offsetWidth;
      const left = trigger.offsetLeft;
      this._indicatorSlide.style.width = width + "px";
      this._indicatorSlide.style.left = left + "px";
    });
  }
}
const mobileBtn = document.querySelector(".js-mobile-button");
const menu = document.querySelector(".js-mobile-menu");
const header = document.querySelector(".js-header");
const backplate = document.querySelector(".js-mobile-menu__backplate");
const initMobileMenu = () => {
  mobileBtn.addEventListener("click", () => {
    if (!mobileBtn.hasAttribute("data-open")) {
      openMenu();
    } else {
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
const initVideoPopups = () => {
  const video = document.querySelector("video");
  const triggers2 = document.querySelectorAll("[data-fancybox]");
  triggers2.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const videoSrc = trigger.dataset.videoSrc;
      video.src = videoSrc;
      video.play();
    });
  });
};
const triggers = document.querySelectorAll("[data-trigger]");
const container = document.querySelector(".popups-container");
const popups = Array.from(container.querySelectorAll("[data-popup]"));
const popupBg = document.querySelector(".popups-bg");
const initPopups = () => {
  triggers.forEach((trigger) => trigger.addEventListener("click", openPopup));
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-btn") || e.target === container) {
      closePopup(e);
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.hasAttribute("data-popup")) {
      closePopup(e);
    }
  });
};
const openPopup = (e) => {
  e.preventDefault();
  const target = popups.find((popup2) => popup2.dataset.popup === e.target.dataset.trigger);
  if (!target) throw new Error("!попап не найден");
  document.body.style.overflow = "hidden";
  document.body.setAttribute("data-popup", target.dataset.popup);
  container.style.display = "flex";
  popupBg.classList.add("popups-bg--show");
  container.classList.add("popups-container--show");
  target.classList.add("popup--show");
};
const closePopup = (e) => {
  e.preventDefault();
  const target = popups.find((popup2) => popup2.dataset.popup === document.body.dataset.popup);
  if (!target) throw new Error("!попап не найден");
  document.body.style.overflow = "visible";
  document.body.removeAttribute("data-popup");
  container.style.display = "none";
  popupBg.classList.remove("popups-bg--show");
  container.classList.remove("popups-container--show");
  target.classList.remove("popup--show");
};
const initScroll = () => {
  const header2 = document.querySelector(".header");
  Motion.scroll((_, info) => {
    const diff = info.y.velocity;
    const currentScroll = info.y.current;
    if (currentScroll > 80 && !header2.classList.contains("header--shadow")) {
      header2.classList.add("header--shadow");
    }
    if (currentScroll <= 80) {
      header2.classList.remove("header--shadow");
    }
    if (diff > 0 && info.y.current > 80 && !header2.classList.contains("header--scroll-hidden")) {
      header2.classList.add("header--scroll-hidden");
    }
    if (diff < 0) {
      header2.classList.remove("header--scroll-hidden");
    }
  });
};
const initNav = () => {
  const navLinks = document.querySelectorAll("[data-catalog]");
  navLinks.forEach((link) =>
    link.addEventListener("click", (e) => {
      const catalogBtn = document.querySelector(`[data-value=${e.target.dataset.catalog}]`);
      catalogBtn.click();
    }),
  );
};
window.addEventListener("DOMContentLoaded", () => {
  new Swiper(".reviews__swiper", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: {
      enabled: true,
      sticky: true,
    },
    navigation: {
      nextEl: ".reviews__swiper-next",
      prevEl: ".reviews__swiper-prev",
    },
    breakpoints: {
      767.8: {
        spaceBetween: 32,
      },
    },
  });
  new Swiper(".promotions__swiper", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: {
      enabled: true,
      sticky: true,
    },
    navigation: {
      nextEl: ".promotions__swiper-next",
      prevEl: ".promotions__swiper-prev",
    },
    breakpoints: {
      767.8: {
        spaceBetween: 32,
      },
    },
  });
  new Swiper(".card__swiper", {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".card__swiper-next",
      prevEl: ".card__swiper-prev",
    },
  });
  Fancybox.bind("[data-fancybox]");
  new Tabs({
    repaintOnresize: true,
  });
  initMobileMenu();
  initVideoPopups();
  initPopups();
  initScroll();
  initNav();
});
