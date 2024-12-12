export const initNav = () => {
  const navLinks = document.querySelectorAll("[data-catalog]");

  navLinks.forEach((link) =>
    link.addEventListener("click", (e) => {
      const catalogBtn = document.querySelector(`[data-value=${e.target.dataset.catalog}]`);
      catalogBtn.click();
    }),
  );
};
