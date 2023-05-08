const buttonSearch = document.querySelector(".button_search");
const inputSearch = document.querySelector(".input_search");
const containerInput = document.querySelector(".container_input");

buttonSearch.addEventListener("click", () => {
  containerInput.classList.toggle("active");
  inputSearch.focus();
});

// DATA ATUALIZADA DO FOOTER

const copyright = document.querySelector(".copyright");

let today = new Date();
let currentYear = today.getFullYear();

copyright.innerHTML = `<p>© Olhar Digital Play ${currentYear} - Todos os Direitos Reservados.</p>`; // EXIBE SEMPRE O ANO ATUAL

// FIRST CAROUSEL
let slideIndex = 0;

const slides = document.querySelectorAll("#carouselMain .carousel_item");

const prevButton = document.querySelector("#carouselMain .carousel_prev");
const nextButton = document.querySelector("#carouselMain .carousel_next");

const dots = document.querySelectorAll("#carouselMain .dot");

const updateActiveDot = () => {
  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

const updateActiveSlide = () => {
  for (i = 0; i < slides.length; i++) {
    switch (slideIndex) {
      case 0:
        slides[0].classList.replace(`item-${i}`, "item-0");
        slides[1].classList.replace(`item-${i}`, "item-1");
        slides[2].classList.replace(`item-${i}`, "item-2");
        slides[3].classList.replace(`item-${i}`, "item-3");
        slides[4].classList.replace(`item-${i}`, "item-4");
        break;
      case 1:
        slides[0].classList.replace(`item-${i}`, "item-1");
        slides[1].classList.replace(`item-${i}`, "item-2");
        slides[2].classList.replace(`item-${i}`, "item-3");
        slides[3].classList.replace(`item-${i}`, "item-4");
        slides[4].classList.replace(`item-${i}`, "item-0");
        break;
      case 2:
        slides[0].classList.replace(`item-${i}`, "item-2");
        slides[1].classList.replace(`item-${i}`, "item-3");
        slides[2].classList.replace(`item-${i}`, "item-4");
        slides[3].classList.replace(`item-${i}`, "item-0");
        slides[4].classList.replace(`item-${i}`, "item-1");
        break;
      case 3:
        slides[0].classList.replace(`item-${i}`, "item-3");
        slides[1].classList.replace(`item-${i}`, "item-4");
        slides[2].classList.replace(`item-${i}`, "item-0");
        slides[3].classList.replace(`item-${i}`, "item-1");
        slides[4].classList.replace(`item-${i}`, "item-2");
        break;
      case 4:
        slides[0].classList.replace(`item-${i}`, "item-4");
        slides[1].classList.replace(`item-${i}`, "item-0");
        slides[2].classList.replace(`item-${i}`, "item-1");
        slides[3].classList.replace(`item-${i}`, "item-2");
        slides[4].classList.replace(`item-${i}`, "item-3");
    }
  }
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const clickedIndex = parseInt(dot.getAttribute("data-index"));

    slideIndex = clickedIndex;

    updateActiveSlide();
    updateActiveDot();
  });
});

nextButton.addEventListener("click", () => {
  const nextIndex = slideIndex >= dots.length - 1 ? 0 : slideIndex + 1;

  slideIndex = nextIndex;

  updateActiveSlide();
  updateActiveDot();
});

prevButton.addEventListener("click", () => {
  const prevIndex = slideIndex <= 0 ? dots.length - 1 : slideIndex - 1;

  slideIndex = prevIndex;

  updateActiveSlide();
  updateActiveDot();
});

// TODAY'S NEWS
const containerCarousel = document.querySelector(
  "#carouselArrows .carousel_content"
);
const carouselItem = document.querySelectorAll(
  "#carouselArrows .carousel_item"
);
const prevArrow = document.querySelector("#carouselArrows .carousel_prev");
const nextArrow = document.querySelector("#carouselArrows .carousel_next");

prevArrow.addEventListener("click", () => {
  containerCarousel.scrollLeft -= containerCarousel.offsetWidth;
});
nextArrow.addEventListener("click", () => {
  containerCarousel.scrollLeft += containerCarousel.offsetWidth;
});

let quantity = 3;

let itemWidth = 100 / quantity;

carouselItem.forEach((item) => {
  item.style.width = `calc(${itemWidth}% - 40px)`;
});

// CAROUSEL EPS OD
const containerCarouselEpsOD = document.querySelector(
  "#carouselFadeArrows .carousel_content"
);
const carouselItemEpsOD = document.querySelectorAll(
  "#carouselFadeArrows .carousel_item"
);

const containerFade = document.querySelector(
  "#carouselFadeArrows .carousel_container"
);

const prevArrowOD = document.querySelector(
  "#carouselFadeArrows .carousel_prev"
);
const nextArrowOD = document.querySelector(
  "#carouselFadeArrows .carousel_next"
);

prevArrowOD.addEventListener("click", () => {
  containerCarouselEpsOD.scrollLeft -= containerCarouselEpsOD.offsetWidth;
  containerFade.classList.remove("active");
});
nextArrowOD.addEventListener("click", () => {
  containerCarouselEpsOD.scrollLeft += containerCarouselEpsOD.offsetWidth;
  containerFade.classList.add("active");
});

let quantityOD = 4;

let itemWidthOD = 100 / quantityOD;

carouselItemEpsOD.forEach((item) => {
  item.style.width = `calc(${itemWidthOD}% - 40px)`;
});

// CAROUSEL EPS OE
const containerCarouselEpsOE = document.querySelector(
  "#carouselFadeArrowsTwo .carousel_content"
);
const carouselItemEpsOE = document.querySelectorAll(
  "#carouselFadeArrowsTwo .carousel_item"
);

const containerFadeOE = document.querySelector(
  "#carouselFadeArrowsTwo .carousel_container"
);

const prevArrowOE = document.querySelector(
  "#carouselFadeArrowsTwo .carousel_prev"
);
const nextArrowOE = document.querySelector(
  "#carouselFadeArrowsTwo .carousel_next"
);

prevArrowOE.addEventListener("click", () => {
  containerCarouselEpsOE.scrollLeft -= containerCarouselEpsOE.offsetWidth;
  containerFadeOE.classList.remove("active");
});
nextArrowOE.addEventListener("click", () => {
  containerCarouselEpsOE.scrollLeft += containerCarouselEpsOE.offsetWidth;
  containerFadeOE.classList.add("active");
});

let quantityOE = 4;

let itemWidthOE = 100 / quantityOE;

carouselItemEpsOE.forEach((item) => {
  item.style.width = `calc(${itemWidthOE}% - 40px)`;
});

// CAROUSEL VIDEOS
const containerCarouselVideos = document.querySelector(
  "#videosNews .carousel_content"
);
const carouselItemVideos = document.querySelectorAll(
  "#videosNews .carousel_item"
);

const containerFadeVideos = document.querySelector(
  "#videosNews .carousel_container"
);

const prevArrowVideos = document.querySelector("#videosNews .carousel_prev");
const nextArrowVideos = document.querySelector("#videosNews .carousel_next");

prevArrowVideos.addEventListener("click", () => {
  containerCarouselVideos.scrollLeft -= containerCarouselVideos.offsetWidth;
  containerFadeVideos.classList.remove("active");
});
nextArrowVideos.addEventListener("click", () => {
  containerCarouselVideos.scrollLeft += containerCarouselVideos.offsetWidth;
  containerFadeVideos.classList.add("active");
});

let quantityVideos = 4;

let itemWidthVideos = 100 / quantityVideos;

carouselItemVideos.forEach((item) => {
  item.style.width = `calc(${itemWidthVideos}%)`;
});

// CATALOG
const containerCarouselCatalog = document.querySelector(
  "#catalog .container_posters"
);
const carouselItemCatalog = document.querySelectorAll("#catalog .poster");

const containerFadeCatalog = document.querySelector(
  "#catalog .container_carousel_posters"
);

const prevArrowCatalog = document.querySelector("#catalog .carousel_prev");
const nextArrowCatalog = document.querySelector("#catalog .carousel_next");

prevArrowCatalog.addEventListener("click", () => {
  containerCarouselCatalog.scrollLeft -= containerCarouselCatalog.offsetWidth;
  containerFadeCatalog.classList.remove("active");
});
nextArrowCatalog.addEventListener("click", () => {
  containerCarouselCatalog.scrollLeft += containerCarouselCatalog.offsetWidth;
  containerFadeCatalog.classList.add("active");
});

let quantityCatalog = 6;

let itemWidthCatalog = 100 / quantityCatalog;

carouselItemCatalog.forEach((item) => {
  item.style.width = `calc(${itemWidthCatalog}% - 10px)`;
});

// FREE CHANNELS
const containerCarouselFree = document.querySelector(
  "#freeChannel .carousel_content"
);
const carouselItemFree = document.querySelectorAll(
  "#freeChannel .carousel_item"
);
const prevArrowFree = document.querySelector("#freeChannel .carousel_prev");
const nextArrowFree = document.querySelector("#freeChannel .carousel_next");

prevArrowFree.addEventListener("click", () => {
  containerCarouselFree.scrollLeft -= containerCarouselFree.offsetWidth;
});
nextArrowFree.addEventListener("click", () => {
  containerCarouselFree.scrollLeft += containerCarouselFree.offsetWidth;
});

let quantityFree = 3;

let itemWidthFree = 100 / quantityFree;

carouselItemFree.forEach((item) => {
  item.style.width = `calc(${itemWidthFree}% - 40px)`;
});

// STORIES

//STORIES CARROUSEL
const containerCarouselStories = document.querySelector(
  "#stories .stories_items"
);
const carouselItemStories = document.querySelectorAll("#stories .stories_item");

const containerFadeStories = document.querySelector(
  "#stories .stories_container"
);

const prevArrowStories = document.querySelector("#stories .carousel_prev");
const nextArrowStories = document.querySelector("#stories .carousel_next");

prevArrowStories.addEventListener("click", () => {
  containerCarouselStories.scrollLeft -= containerCarouselStories.offsetWidth;
  containerFadeStories.classList.remove("active");
});
nextArrowStories.addEventListener("click", () => {
  containerCarouselStories.scrollLeft += containerCarouselStories.offsetWidth;
  containerFadeStories.classList.add("active");
});

let quantityStories = 5;

let itemWidthStories = 100 / quantityStories;

carouselItemStories.forEach((item) => {
  item.style.width = `calc(${itemWidthStories}% - 20px)`;
});

// STORIES VIEW
const stories = document.querySelectorAll(".stories_item");
const containerStorie = document.querySelector(".open_storie_container");

stories.forEach((storie) => {
  const indexStorie = storie.getAttribute("data-index");
  const imageStorie = storie.firstElementChild.getAttribute("src").split("/");
  const nameImage = imageStorie[imageStorie.length - 1];
  const titleStorie = storie.lastElementChild.firstElementChild.innerText;

  let storiesContent;

  storiesContent = {
    id: indexStorie,
    image: nameImage,
    title: titleStorie,
  };

  storie.addEventListener("click", () => {
    containerStorie.classList.add("hidden");

    setTimeout(() => {
      containerStorie.classList.add("active");
    }, 200);

    containerStorie.innerHTML = `
      <div class="close"></div>
      <div 
        class="storie_open" 
        data-index="${storiesContent.id}"
      >
        <div class="images_carousel">
          <div class="image" data-index="0"> 
            <img src='./src/assets/images/${storiesContent.image}'  />
          </div> 
          <div class="image" data-index="1"> 
            <img src='./src/assets/images/web_stories_mumia.webp'  />
          </div>
          <div class="image" data-index="2"> 
            <img src='./src/assets/images/web_stories_carros_blindados.webp' />
          </div>
        </div>
        <div class="storie_open_prev">
          <svg width="34" height="60" viewBox="0 0 34 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.8002 8.99998L12.8002 30L33.8002 51L29.6002 59.4L0.200195 30L29.6002 0.599976L33.8002 8.99998Z" fill="white" fill-opacity="0.5"/>
          </svg>
        </div>
        <div class="storie_open_row">
          <div class="progress_bar">
            <div class="dot_progress" data-index="0"></div>
            <div class="dot_progress" data-index="1"></div>
            <div class="dot_progress" data-index="2"></div>
          </div>
          <div class="storie_open_functions">
            <div class="play_pause">
            </div>
          </div>
          <div class="stories_texts">
            <p data-index="0">${storiesContent.title}</p>
            <p data-index="1">texto 2</p>
            <p data-index="2">texto 3</p>
          </div> 
        </div>
        <div class="storie_open_next">
        <svg width="34" height="60" viewBox="0 0 34 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.199807 51L21.1998 30L0.199811 9.00002L4.39981 0.600026L33.7998 30L4.39981 59.4L0.199807 51Z" fill="white" fill-opacity="0.5"/>
        </svg>
        </div>
      </div>
    `;

    // ANIMAÇÃO DOS DOTS

    //consts
    const dots = document.querySelectorAll(".dot_progress");
    const imagesStorieCarousel = document.querySelectorAll(".images_carousel .image");
    const textStorieCarousel = document.querySelectorAll(".stories_texts p");
    const pauseStorie = document.querySelector(".play_pause");
    const closeButton = document.querySelector(".close");

    // default variables
    let currentDot = 0;
    let currentSlide = 0;
    let currentText = 0;
    let timeAnimation = 5000;
    let timeToNext = 10;
    let isPause = false;

    // timeouts
    const startStoriesAnimations = () => setTimeout(storiesAnimations, timeToNext);
    const timeToProgressStories = () => setTimeout(storiesAnimations, timeAnimation);
    const startTextsAnimations = () => setTimeout(textsAnimations, timeToNext);
    const timeToProgressTexts = () => setTimeout(textsAnimations, timeAnimation);
    const startDotsAnimation = () => setTimeout(dotsAnimations, timeToNext);
    const timeToProgressDots = () => setTimeout(dotsAnimations, timeAnimation);

    // animation dots
    const dotsAnimations = () => {
      if (isPause == false) {
        dots[currentDot].classList.add("active");
        currentDot++;
      }

      if (currentDot < dots.length) {
        if (isPause == false) {
          timeToProgressDots();
        } else {
          clearTimeout(timeToProgressDots);
        }
      }
    };

    // animation stories
    const storiesAnimations = () => {
      if (isPause == false) {
        imagesStorieCarousel[currentSlide].classList.add("active");
        currentSlide++;
      }

      if (currentSlide < dots.length) {
        if (isPause == false) {
          setTimeout(function () {
            let lastSlide = currentSlide - 1;
            imagesStorieCarousel[lastSlide].classList.remove("active");
          }, timeAnimation);
          timeToProgressStories();
        } else {
          clearTimeout(timeToProgressStories);
        }
      }
    };

    // animation stories
    const textsAnimations = () => {
      if (isPause == false) {
        textStorieCarousel[currentText].classList.add("active");
        currentText++;
      }

      if (currentText < dots.length) {
        if (isPause == false) {
          setTimeout(function () {
            let lastText = currentText - 1;
            textStorieCarousel[lastText].classList.remove("active");
          }, timeAnimation);
          timeToProgressTexts();
        } else {
          clearTimeout(timeToProgressTexts);
        }
      }
    };

    // timeout start
    startDotsAnimation();
    startStoriesAnimations();
    startTextsAnimations();

    // pause and play stories
    const pause = () => {
      pauseStorie.classList.toggle("active");
      if (isPause == false) {
        isPause = true;
      } else if (isPause == true && currentSlide < dots.length) {
        isPause = false;

        let lastSlide = currentSlide - 1;
        imagesStorieCarousel[lastSlide].classList.remove("active");

        let lastText = currentText - 1;
        textStorieCarousel[lastText].classList.remove("active");

        startDotsAnimation();
        startStoriesAnimations();
        startTextsAnimations();
      }
    };
    pauseStorie.addEventListener("click", pause);

    // close stories
    const closeSlides = () => {
      containerStorie.classList.remove("active");
      setTimeout(() => {
        containerStorie.classList.remove("hidden");
      }, 200);
    }
    closeButton.addEventListener("click", closeSlides);

    // //BOTÃO NEXT
    // const nextStorie = document.querySelector(".storie_open_next");
    // nextStorie.addEventListener("click", () => {
    //   console.log("próximo");
    // });

    // //BOTÃO ANTERIOR
    // const prevStorie = document.querySelector(".storie_open_prev");
    // prevStorie.addEventListener("click", () => {
    //   console.log("anterior");
    // });
  });
});
