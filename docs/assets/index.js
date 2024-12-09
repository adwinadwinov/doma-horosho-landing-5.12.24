var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __tabComponent, __tabPanels, __tabTriggers, __currentTab, __indicatorSlide;
class Tabs {
  constructor(tabSelector = ".tabs") {
    __privateAdd(this, __tabComponent);
    __privateAdd(this, __tabPanels);
    __privateAdd(this, __tabTriggers);
    __privateAdd(this, __currentTab);
    __privateAdd(this, __indicatorSlide);
    __privateSet(this, __tabComponent, document.querySelector(tabSelector));
    this._initTabs();
  }
  _initTabs() {
    __privateSet(this, __tabTriggers, Array.from(__privateGet(this, __tabComponent).querySelectorAll(".tabs-triggers__btn")));
    __privateSet(this, __tabPanels, Array.from(__privateGet(this, __tabComponent).querySelectorAll(".tabs-content__panel")));
    __privateSet(this, __indicatorSlide, __privateGet(this, __tabComponent).querySelector(".tabs-indicator__slide"));
    __privateSet(this, __currentTab, __privateGet(this, __tabTriggers).find((trigger) => trigger.dataset.value === __privateGet(this, __tabComponent).dataset.defaultValue));
    this._changeActiveTab(__privateGet(this, __currentTab));
    __privateGet(this, __tabTriggers).forEach((tabTrigger) => {
      tabTrigger.addEventListener("click", (e) => {
        this._changeActiveTab(e.target);
      });
    });
  }
  _changeActiveTab(trigger) {
    if (trigger.classList.contains("tabs-triggers__btn--active")) return;
    const value = trigger.dataset.value;
    const targetTab = __privateGet(this, __tabPanels).find((panel) => panel.dataset.value === value);
    __privateGet(this, __tabPanels).forEach((panel) => {
      if (panel.classList.contains("tabs-content__panel--active")) {
        panel.classList.remove("tabs-content__panel--active");
      }
    });
    __privateGet(this, __tabTriggers).forEach((trigger2) => {
      if (trigger2.classList.contains("tabs-triggers__btn--active")) {
        trigger2.classList.remove("tabs-triggers__btn--active");
      }
    });
    targetTab.classList.add("tabs-content__panel--active");
    trigger.classList.add("tabs-triggers__btn--active");
    this._handleSelectedAccessibility(trigger);
    __privateSet(this, __currentTab, trigger);
    this._handleIndicator(trigger);
  }
  _handleSelectedAccessibility(target) {
    __privateGet(this, __tabTriggers).forEach((trigger) => {
      trigger.ariaSelected = false;
    });
    target.ariaSelected = true;
  }
  _handleIndicator(trigger) {
    document.fonts.ready.then(() => {
      const width = __privateGet(this, __currentTab).offsetWidth;
      const left = trigger.offsetLeft;
      __privateGet(this, __indicatorSlide).style.width = width + "px";
      __privateGet(this, __indicatorSlide).style.left = left + "px";
    });
  }
}
__tabComponent = new WeakMap();
__tabPanels = new WeakMap();
__tabTriggers = new WeakMap();
__currentTab = new WeakMap();
__indicatorSlide = new WeakMap();
window.addEventListener("DOMContentLoaded", () => {
  new Swiper(".reviews__swiper", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 32,
    freeMode: true,
    navigation: {
      nextEl: ".reviews__swiper-next",
      prevEl: ".reviews__swiper-prev"
    }
  });
  new Swiper(".promotions__swiper", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 32,
    freeMode: true,
    navigation: {
      nextEl: ".promotions__swiper-next",
      prevEl: ".promotions__swiper-prev"
    }
  });
  Fancybox.bind("[data-fancybox]", {
    // Дополнительные настройки (если нужны)
  });
  new Tabs();
});
