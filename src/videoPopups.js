export const initVideoPopups = () => {
  const video = document.querySelector("video");
  const triggers = document.querySelectorAll("[data-fancybox]");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const videoSrc = trigger.dataset.videoSrc;
      video.src = videoSrc;
      video.play();
    });
  });
};
