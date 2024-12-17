// ################ Логика табов каталога ################ //
class Tabs {
  _tabComponent;
  _tabPanels;
  _tabTriggers;
  _currentTab;
  _indicatorSlide;

  constructor({ tabSelector, repaintOnresize }) {
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

    this._tabTriggers.forEach((tabTrigger) => {
      if (tabTrigger.classList.contains("tabs-triggers__btn--active")) {
        tabTrigger.classList.remove("tabs-triggers__btn--active");
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

// ################ Логика появления мобильного nav ################ //
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
    menu.addEventListener("click", (e) => {
      if (e.target.classList.contains("mobile-menu__nav-link")) {
        closeMenu();
      }
    });
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

// ################ Логика попапов ################ //

const triggers = document.querySelectorAll("[data-trigger]");
const container = document.querySelector(".popups-container");
const popups = Array.from(container.querySelectorAll("[data-popup]"));
const popupBg = document.querySelector(".popups-bg");

const initPopups = () => {
  triggers.forEach((trigger) =>
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const title = trigger.dataset.popupTitle;
      const target = trigger.dataset.target;
      const isWs = trigger.hasAttribute("data-ws");
      openPopup(
        trigger.dataset.trigger,
        {
          title: title,
          isWs: isWs,
        },
        target,
      );
    }),
  );
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-btn") || e.target === container) {
      e.preventDefault();
      closePopup();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.hasAttribute("data-popup")) {
      closePopup(e);
    }
  });
};

const POPUP_STANDART_TITLE = "Заказать расчет";

const openPopup = (targetPopup, settings, targetGood) => {
  const target = popups.find((popup) => popup.dataset.popup === targetPopup);
  target.dataset.target = targetGood;
  if (!target) throw new Error("!попап не найден");

  if (settings && settings.title) {
    const popuptitle = target.querySelector(".js-popup__title");
    popuptitle.innerText = settings.title;
  }

  if (settings && settings.isWs) {
    const cbs = target.querySelector(".js-calc-popup__cbs");
    cbs.style.display = "none";
  }

  document.body.style.overflow = "hidden";
  document.body.setAttribute("data-popup", target.dataset.popup);
  container.style.display = "flex";
  popupBg.classList.add("popups-bg--show");
  container.classList.add("popups-container--show");
  target.classList.add("popup--show");
};

const closePopup = () => {
  const target = popups.find((popup) => popup.dataset.popup === document.body.dataset.popup);
  target.removeAttribute("data-target");
  if (!target) throw new Error("!попап не найден");

  document.body.style.overflow = "visible";
  document.body.removeAttribute("data-popup");
  container.style.display = "none";
  popupBg.classList.remove("popups-bg--show");
  container.classList.remove("popups-container--show");
  target.classList.remove("popup--show");
  const popuptitle = target.querySelector(".js-popup__title");
  if (popuptitle) {
    popuptitle.innerText = POPUP_STANDART_TITLE;
  }
  const cbs = target.querySelector(".js-calc-popup__cbs");
  cbs.style.display = "flex";
};

// ################ Логика поведения шапки при скролле ################ //

const initScroll = () => {
  const header = document.querySelector(".js-header");
  Motion.scroll((_, info) => {
    const diff = info.y.velocity;
    const currentScroll = info.y.current;
    if (currentScroll > 80 && !header.classList.contains("header--shadow")) {
      header.classList.add("header--shadow");
    }
    if (currentScroll <= 80) {
      header.classList.remove("header--shadow");
    }
    if (diff > 0 && info.y.current > 80 && !header.classList.contains("header--scroll-hidden")) {
      header.classList.add("header--scroll-hidden");
    }
    if (diff < 0) {
      header.classList.remove("header--scroll-hidden");
    }
  });
};

// ################ Логика переключения таба каталога при выборе его типа в шапке ################ //

const initNav = () => {
  const navLinks = document.querySelectorAll("[data-catalog]");
  navLinks.forEach((link) =>
    link.addEventListener("click", (e) => {
      const catalogBtn = document.querySelector(`[data-value=${e.target.dataset.catalog}]`);
      catalogBtn.click();
    }),
  );
};

// ################ Логика "Показать еще" ################ //

const showGoods = (goods, count) => {
  goods.forEach((good, index) => {
    if (index < count) {
      good.style.display = "block";
    } else {
      good.style.display = "none";
    }
  });
};

const initCatalog = () => {
  const catalogPanel = document.querySelectorAll(".js-tab-panel");
  const GOODS_ON_PAGE = 6;

  catalogPanel.forEach((panel) => {
    const moreBtn = panel.querySelector(".js-catalog-button");
    const moreBtnText = moreBtn.querySelector(".js-btn-catalog-content");
    const goods = Array.from(panel.querySelector(".js-catalog-grid").children);
    let currentGoods = GOODS_ON_PAGE;
    showGoods(goods, currentGoods);

    moreBtn.addEventListener("click", () => {
      if (currentGoods >= goods.length) {
        currentGoods = 0;
        window.scrollTo({
          top: panel.offsetTop,
          behavior: "smooth",
        });
        moreBtnText.innerText = "Показать ещё";
      }
      currentGoods += GOODS_ON_PAGE;
      if (currentGoods >= goods.length) {
        moreBtnText.innerText = "Свернуть";
      }
      showGoods(goods, currentGoods);
    });
  });
};

// ################ Логика получения utm ################ //

const getParam = (param) => {
  const urlParams = new URL(window.location.toString()).searchParams;
  return urlParams.get(param) || "";
};

const UTM_TYPES = {
  utm_source: "",
  utm_content: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_referrer: "",
};

const getUtms = () => {
  return Object.keys(UTM_TYPES).reduce((acc, utm) => ({ [utm]: getParam(utm), ...acc }), {});
};

// ################ Логика работы формы "Заказать расчет" ################ //

const inputs = document.querySelectorAll("input");

const getPhoneValue = (value) => {
  let val = value.replace(/\D/g, "");

  if (val) {
    if (val[0] === "7" || val[0] === "8") {
      val = val.slice(1);
    }

    val = val.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    val =
      "+7" + (val[2] ? "(" + val[1] + ")" + val[2] : val[1] ? val[1] : "") + (val[3] ? "-" + val[3] : "") + (val[4] ? "-" + val[4] : "");
  }

  return val;
};

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("error");

    if (input.type === "tel") {
      input.value = getPhoneValue(input.value);
    }
  });
});

const validateInputs = (form) => {
  const requiredInputs = form.querySelectorAll("input[data-required]");
  let isError = false;

  requiredInputs.forEach((input) => {
    const isTel = input.type === "tel";

    if (input.value.trim() === "") {
      isError = true;
      input.classList.add("error");
    }

    if (isTel && input.value.length < 16) {
      isError = true;
      input.classList.add("error");
    }
  });

  return !isError;
};

const resetForm = (form) => {
  form.reset();
  const cb = form.querySelector(".js-callback-kind__btn");
  cb.click();
};

const FORM_STATUSES = {
  PROCESSING: "processing",
  IDLE: "idle",
  SUCCESS: "success",
  ERROR: "error",
};

const loader = document.createElement("div");
loader.classList.add("loader-wrapper");
loader.innerHTML = '<div class="loader"></div>';

const initFormHadler = () => {
  const forms = document.querySelectorAll(".js-form");

  forms.forEach((form) => {
    const callBackTypes = form.querySelectorAll(".js-callback-kind__btn");
    callBackTypes.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        callBackTypes.forEach((btn) => btn.classList.remove("callback-kind__btn--active"));
        btn.classList.add("callback-kind__btn--active");
      });
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const isCorrect = validateInputs(form);
      if (!isCorrect) return;
      if (form.dataset.status === FORM_STATUSES.PROCESSING) return;

      try {
        const sendData = new FormData(form);

        const utms = getUtms();
        sendData.append("callback", form.querySelector(".callback-kind__btn--active").dataset.callbackType);
        const target = document.querySelector(".calc-popup").dataset.target;
        sendData.append("target", target !== "undefined" ? target : "Кухня");
        sendData.append("utms", JSON.stringify(utms));

        form.dataset.status = FORM_STATUSES.PROCESSING;
        form.appendChild(loader);
        const response = await fetch("integrations/amo.php", {
          method: "POST",
          body: sendData,
        });

        if (!response.ok) {
          throw new Error("Ошибка!");
        }

        form.dataset.status = FORM_STATUSES.SUCCESS;
      } catch (error) {
        console.error("Ошибка при отправке формы");
        console.error(error);
        form.dataset.status = FORM_STATUSES.ERROR;
      } finally {
        form.removeChild(loader);
        closePopup();
        if (form.dataset.status === FORM_STATUSES.SUCCESS) {
          openPopup("success-popup");
        }

        if (form.dataset.status === FORM_STATUSES.ERROR) {
          openPopup("error-popup");
        }

        form.dataset.status = FORM_STATUSES.IDLE;
        resetForm(form);
      }
    });
  });
};

// ################ Общая инициализация ################ //

window.addEventListener("DOMContentLoaded", () => {
  // Свайперы
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

  // Попап с видео
  const video = document.querySelector("video");
  Fancybox.bind("[data-fancybox]", {
    on: {
      init: (fancybox) => {
        video.src = fancybox.options.triggerEl.dataset.videoSrc;
        video.volume = 0.3;
        video.play();
      },
      destroy: () => {
        video.pause();
      },
    },
  });

  // Табы каталога
  new Tabs({
    repaintOnresize: true,
  });

  // инициализация других компонентов
  initMobileMenu();
  initPopups();
  initScroll();
  initNav();
  initCatalog();
  initFormHadler();
});
