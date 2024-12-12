const triggers = document.querySelectorAll("[data-trigger]");
const container = document.querySelector(".popups-container");
const popups = Array.from(container.querySelectorAll("[data-popup]"));
const popupBg = document.querySelector(".popups-bg");

export const initPopups = () => {
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
  const target = popups.find((popup) => popup.dataset.popup === e.target.dataset.trigger);

  if (!target) throw new Error("!попап не найден");

  document.body.style.overflow = "hidden";
  document.body.setAttribute("data-popup", target.dataset.popup);
  Motion.animate(container, { display: "flex" });
  Motion.animate(popupBg, { opacity: [0, 1], display: "flex" }, { duration: 0.3 });
  Motion.animate(target, { display: "felx", translateY: [20, 0] }, { duration: 0.3, easing: "spring" });
};

const closePopup = (e) => {
  e.preventDefault();
  const target = popups.find((popup) => popup.dataset.popup === document.body.dataset.popup);

  if (!target) throw new Error("!попап не найден");

  document.body.style.overflow = "visible";
  document.body.removeAttribute("data-popup");
  Motion.animate(container, { display: "none" });
  Motion.animate(popupBg, { opacity: [1, 0] }, { delay: 0.2, duration: 0.3 });
  Motion.animate(target, { translateY: [0, 20] }, { duration: 0.3, easing: "spring" });
};
