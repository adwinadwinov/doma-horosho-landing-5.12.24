import "./styles/main.scss";
import { Tabs } from "./tabs";

window.addEventListener("DOMContentLoaded", () => {
  new Swiper(".reviews__swiper", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 32,
    freeMode: true,

    navigation: {
      nextEl: ".reviews__swiper-next",
      prevEl: ".reviews__swiper-prev",
    },
  });

  new Swiper(".promotions__swiper", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 32,
    freeMode: true,

    navigation: {
      nextEl: ".promotions__swiper-next",
      prevEl: ".promotions__swiper-prev",
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

  Fancybox.bind("[data-fancybox]", {
    // Дополнительные настройки (если нужны)
  });

  new Tabs();
});
