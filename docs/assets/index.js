var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
const mobileMenu = () => {
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
const videoPopups = () => {
  const video = document.querySelector("video");
  const triggers = document.querySelectorAll("[data-fancybox]");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const videoSrc = trigger.dataset.videoSrc;
      video.src = videoSrc;
      video.play();
    });
  });
};
window.addEventListener("DOMContentLoaded", () => {
  new Swiper(".reviews__swiper", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: {
      enabled: true,
      sticky: true
    },
    navigation: {
      nextEl: ".reviews__swiper-next",
      prevEl: ".reviews__swiper-prev"
    },
    breakpoints: {
      767.8: {
        spaceBetween: 32
      }
    }
  });
  new Swiper(".promotions__swiper", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: {
      enabled: true,
      sticky: true
    },
    navigation: {
      nextEl: ".promotions__swiper-next",
      prevEl: ".promotions__swiper-prev"
    },
    breakpoints: {
      767.8: {
        spaceBetween: 32
      }
    }
  });
  new Swiper(".card__swiper", {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".card__swiper-next",
      prevEl: ".card__swiper-prev"
    }
  });
  Fancybox.bind("[data-fancybox]");
  new Tabs({
    repaintOnresize: true
  });
  mobileMenu();
  videoPopups();
});
