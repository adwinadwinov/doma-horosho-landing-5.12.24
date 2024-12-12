export const initScroll = () => {
  const header = document.querySelector(".js-header");

  Motion.scroll((_, info) => {
    const diff = info.y.velocity;
    const currentScroll = info.y.current;

    if (currentScroll > 80) {
      header.classList.add("header--shadow");
    } else {
      header.classList.remove("header--shadow");
    }

    if (diff > 0 && info.y.current > 80) {
      header.classList.add("header--scroll-hidden");
    } else {
      header.classList.remove("header--scroll-hidden");
    }
  });
};
