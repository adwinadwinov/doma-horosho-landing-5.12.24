export class Tabs {
  #_tabComponent;
  #_tabPanels;
  #_tabTriggers;
  #_currentTab;
  #_indicatorSlide;

  constructor(tabSelector = ".tabs") {
    this.#_tabComponent = document.querySelector(tabSelector);
    this._initTabs();
  }

  _initTabs() {
    this.#_tabTriggers = Array.from(this.#_tabComponent.querySelectorAll(".tabs-triggers__btn"));
    this.#_tabPanels = Array.from(this.#_tabComponent.querySelectorAll(".tabs-content__panel"));
    this.#_indicatorSlide = this.#_tabComponent.querySelector(".tabs-indicator__slide");
    this.#_currentTab = this.#_tabTriggers.find((trigger) => trigger.dataset.value === this.#_tabComponent.dataset.defaultValue);
    this._changeActiveTab(this.#_currentTab);

    this.#_tabTriggers.forEach((tabTrigger) => {
      tabTrigger.addEventListener("click", (e) => {
        this._changeActiveTab(e.target);
      });
    });
  }

  _changeActiveTab(trigger) {
    if (trigger.classList.contains("tabs-triggers__btn--active")) return;

    const value = trigger.dataset.value;
    const targetTab = this.#_tabPanels.find((panel) => panel.dataset.value === value);
    this.#_tabPanels.forEach((panel) => {
      if (panel.classList.contains("tabs-content__panel--active")) {
        panel.classList.remove("tabs-content__panel--active");
      }
    });
    this.#_tabTriggers.forEach((trigger) => {
      if (trigger.classList.contains("tabs-triggers__btn--active")) {
        trigger.classList.remove("tabs-triggers__btn--active");
      }
    });

    targetTab.classList.add("tabs-content__panel--active");
    trigger.classList.add("tabs-triggers__btn--active");
    this._handleSelectedAccessibility(trigger);
    this.#_currentTab = trigger;
    this._handleIndicator(trigger);
  }

  _handleSelectedAccessibility(target) {
    this.#_tabTriggers.forEach((trigger) => {
      trigger.ariaSelected = false;
    });

    target.ariaSelected = true;
  }

  _handleIndicator(trigger) {
    document.fonts.ready.then(() => {
      const width = this.#_currentTab.offsetWidth;
      const left = trigger.offsetLeft;
      this.#_indicatorSlide.style.width = width + "px";
      this.#_indicatorSlide.style.left = left + "px";
    });
  }
}
