import "./styles/style.scss";

(function () {
  // show scroll to top icon when screen is scrolled down more than 2/3 of its height
  const btnClasses = document.querySelector(".scroll-to-top").classList;

  window.addEventListener("scroll", () => {
    const under = window.pageYOffset > (window.innerHeight * 2) / 3;

    under ? btnClasses.remove("hidden") : btnClasses.add("hidden");
  });
})();
