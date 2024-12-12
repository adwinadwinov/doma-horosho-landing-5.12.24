import "./styles/main.scss";
import { Tabs } from "./tabs";
import { initMobileMenu } from "./mobile-menu";
import { initVideoPopups } from "./videoPopups";
import { initPopups } from "./popups";
import { initScroll } from "./scroll";

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
});
