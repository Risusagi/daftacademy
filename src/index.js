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

    // card of a product from a new arrivals list
    const productCard = () => {
      const card = document.createElement("div");
      card.classList.add(
        "new__card",
        "card",
        "col-12",
        "col-sm-6",
        "col-md-4",
        "col-lg-3"
      );
      card.innerHTML = `
          <a href="#">
            <img
              class="card-img-top w-90"
              src="https://picsum.photos/309/390"
              alt="Coat"
            />
          </a>
          <div class="card-body">
            <a class="card-text new__product-name" href="#">Coat</a>
            <span class="card-text price">$49.99</span>
          </div>
      `;
      return card;
    };

    // load next 12 product cards on "All products" button click
    const showMoreProducts = () => {
      const productsContainer = document.querySelector(".products-container");

      document.querySelector(".show-more-btn").addEventListener("click", () => {
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < 12; i++) {
          fragment.appendChild(productCard());
        }

        productsContainer.appendChild(fragment);
      });
    };

    return {
      handleScrollToTop,
      handleCopyrightDate,
      showMoreProducts,
    };
  };

  module().handleCopyrightDate();
  module().showMoreProducts();

  window.addEventListener("scroll", module().handleScrollToTop);
});
