import "./styles/style.scss";
import {
  handleScrollToTop,
  handleCopyrightDate,
  showMoreProducts,
} from "./js/methods";

window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", handleScrollToTop);
  handleCopyrightDate();

  const moreBtn = document.querySelector(".show-more-btn");
  moreBtn.addEventListener("click", showMoreProducts);
});
