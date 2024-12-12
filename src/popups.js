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
  container.style.display = "flex";
  popupBg.classList.add("popups-bg--show");
  container.classList.add("popups-container--show");
  target.classList.add("popup--show");
};

const closePopup = (e) => {
  e.preventDefault();
  const target = popups.find((popup) => popup.dataset.popup === document.body.dataset.popup);

  if (!target) throw new Error("!попап не найден");

  document.body.style.overflow = "visible";
  document.body.removeAttribute("data-popup");
  container.style.display = "none";
  popupBg.classList.remove("popups-bg--show");
  container.classList.remove("popups-container--show");
  popup.classList.remove("popup--show");
};
