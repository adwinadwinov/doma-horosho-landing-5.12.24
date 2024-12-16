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
const inputs = document.querySelectorAll('input')
function getPhoneValue(value) {
  let val = value.replace(/\D/g, '')

  if (val) {
    if (val[0] === '7' || val[0] === '8') {
      val = val.slice(1)
    }

    val = val.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
    val = '+7' + (val[2] ? '(' + val[1] + ')' + val[2] : (val[1] ? val[1] : '')) + (val[3] ? '-' + val[3] : '') + (val[4] ? '-' + val[4] : '')
  }

  return val
}
inputs.forEach(input => {
  input.addEventListener('input', () => {
    input.classList.remove('error')

    if (input.type === 'tel') {
      input.value = getPhoneValue(input.value)
    }
  })
})
function validateInputs(form) {
  const requiredInputs = form.querySelectorAll('input[data-required]')
  let isError = false

  requiredInputs.forEach(input => {
    const isTel = input.type === 'tel'

    if (input.value.trim() === '') {
      isError = true
      input.classList.add('error')
    }

    if (isTel && input.value.length < 16) {
      isError = true
      input.classList.add('error')
    }
  })

  return !isError
}
const initFormHadler = () => {
  const forms = document.querySelectorAll('.js-form');

  forms.forEach(form => {
    const callBackTypes = form.querySelectorAll('.js-callback-kind__btn');
    callBackTypes.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        callBackTypes.forEach((btn) => btn.classList.remove('callback-kind__btn--active'));
        btn.classList.add('callback-kind__btn--active');
      });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const isCorrect = validateInputs(form)

      if (!isCorrect) return

      try {
        const sendData = new FormData(form);
        sendData.append('cb-type', form.querySelector('.callback-kind__btn--active').dataset.callbackType);
        console.log([...sendData]);
      } catch (error) {
        console.error('Ошибка при отправке формы');
        console.error(error);
      } finally {
        console.log('finally');
      }
    });
  });
}
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
  new Tabs({
    repaintOnresize: true,
  });
  initMobileMenu();
  initPopups();
  initScroll();
  initNav();
  initCatalog();
  initFormHadler();
});
