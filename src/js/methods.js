/*handle scroll to top button appearance */
const scrollToTopClasses = document.querySelector(".scroll-to-top").classList;

// show scroll to top icon when screen is scrolled down more than 1/2 of its height
export const handleScrollToTop = () => {
  const under = window.pageYOffset > window.innerHeight / 2;

  under
    ? scrollToTopClasses.remove("hidden")
    : scrollToTopClasses.add("hidden");
};

/* ---- handle date of the copyright ---- */
const copyrightDate = document.querySelector(".copyright-date");

// set date of the copyright
export const handleCopyrightDate = () =>
  (copyrightDate.textContent = new Date().getFullYear());

/* ---- handle loading of next products ---- */
const productsContainer = document.querySelector(".products-container");

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
export const showMoreProducts = () => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 12; i++) {
    fragment.appendChild(productCard());
  }

  productsContainer.appendChild(fragment);
};

/* handle carousel */
const slidesContainer = document.querySelector(".main__carousel-slides");
const slidesAmount = document.querySelectorAll(".main__carousel-card").length;
const fullWidth = parseFloat(
  getComputedStyle(document.querySelector(".main__carousel-slider")).width
);
// width of img plus 1rem padding
const slideWidth = 268 + 16;
// amount of visible slides
const amount = fullWidth / slideWidth;
// amount of slides fully visible (100% of their width)
const int = Math.floor(amount);
// part of the last visible slide that is not visible
const slideSlice = 1 - (amount - int);

let counter = 0;

export const next = () => {
  if (Math.abs(counter) + amount >= slidesAmount) return;

  // for cases when carousel shows some amount of slides plus part of one slide
  // if only part of the last slide left to scroll, scroll carousel for this part (smaller than slides full width)
  if (Math.abs(counter) === slidesAmount - int - 1) {
    counter -= slideSlice;
  } else {
    counter--;
  }

  slidesContainer.style.transform = `translateX(${slideWidth * counter}px)`;
};

export const prev = () => {
  if (counter === 0) return;
  if (slideSlice >= Math.abs(counter)) {
    counter = 0;
  } else {
    counter++;
  }

  slidesContainer.style.transform = `translateX(${slideWidth * counter}px)`;
};

let startX = 0;
let endX = 0;

// move slides in the same direction as mouse was move / screen was slided
const handleSlide = () => {
  // left to right
  if (startX < endX) {
    prev();
  } else if (startX > endX) {
    next();
  }
};

export const handleMouseDown = (e) => (startX = e.clientX);

export const handleMouseUp = (e) => {
  endX = e.clientX;
  handleSlide();
};

export const handleTouchStart = (e) => (startX = e.touches[0].clientX);

export const handleTouchEnd = (e) => {
  endX = e.changedTouches[0].pageX;
  handleSlide();
};
