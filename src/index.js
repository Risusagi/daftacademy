import "./styles/style.scss";
import {
  handleScrollToTop,
  handleCopyrightDate,
  showMoreProducts,
  next,
  prev,
  handleMouseDown,
  handleMouseUp,
  handleTouchStart,
  handleTouchEnd,
} from "./js/methods";

window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", handleScrollToTop);
  handleCopyrightDate();

  const moreBtn = document.querySelector(".show-more-btn");
  moreBtn.addEventListener("click", showMoreProducts);

  /* handle carousel */
  document
    .querySelector(".main__carousel-control--next")
    .addEventListener("click", next);

  document
    .querySelector(".main__carousel-control--prev")
    .addEventListener("click", prev);

  const wrap = document.querySelector(".main__carousel-wrapper");

  wrap.addEventListener("mousedown", handleMouseDown);

  wrap.addEventListener("mouseup", handleMouseUp);

  wrap.addEventListener("touchstart", handleTouchStart);

  wrap.addEventListener("touchend", handleTouchEnd);
});
