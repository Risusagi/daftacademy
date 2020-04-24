import "./styles/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  const module = () => {
    const scrollToTopClasses = document.querySelector(".scroll-to-top")
      .classList;

    // show scroll to top icon when screen is scrolled down more than 1/2 of its height
    const handleScrollToTop = () => {
      const under = window.pageYOffset > window.innerHeight / 2;

      under
        ? scrollToTopClasses.remove("hidden")
        : scrollToTopClasses.add("hidden");
    };

    // set date of copyright
    const handleCopyrightDate = () => {
      const copyrightDate = document.querySelector(".copyright-date");

      copyrightDate.textContent = new Date().getFullYear();
    };

    return {
      handleScrollToTop,
      handleCopyrightDate,
    };
  };

  module().handleCopyrightDate();

  window.addEventListener("scroll", module().handleScrollToTop);
});
