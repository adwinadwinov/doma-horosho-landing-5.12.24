export const initScroll = () => {
  const header = document.querySelector(".header");

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
