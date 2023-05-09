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
        <div class="progress_bar">
            <div class="dot_progress" data-index="0">
              <div class="progress_active"></div>
            </div>
            <div class="dot_progress" data-index="1">
              <div class="progress_active"></div>
            </div>
            <div class="dot_progress" data-index="2">
              <div class="progress_active"></div>
            </div>
          </div>
        <div class="storie_open_functions">
            <div class="play_pause">
            </div>
          </div>
        <div class="storie_open_row">
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
        <div class="reset"></div>
      </div>
    `;

    // ANIMAÇÃO DOS DOTS

    //consts
    const dotsStories = document.querySelectorAll(".dot_progress"); //progressBarElements
    const pauseStorie = document.querySelector(".play_pause");
    const closeButton = document.querySelector(".close");
    const imageStories = document.querySelectorAll(".image");
    const textStories = document.querySelectorAll(".stories_texts p");
    const containerStories = document.querySelector(".storie_open_row");
    const resetArea = document.querySelector(".reset");

    // default variables
    let currentProgressIndex = 0;
    let currentProgress = 0;
    let currentImage = 0;
    let currentText = 0;
    let timeAnimation = 5000; //storyDuration
    let isPause = false;

    const interval = 10;
    const increment = interval / timeAnimation * 100;

    const intervalId = () => setInterval(() => {
      if (currentProgressIndex < dotsStories.length) {
        if (currentProgress >= 100 && isPause == false) {
          clearInterval(intervalId);
          currentProgressIndex++;

          if (currentProgressIndex >= dotsStories.length) {
            clearInterval(intervalId);
            resetArea.classList.add("hidden");

            setTimeout(() => {
              resetArea.classList.add("active");
              pauseStorie.classList.add("active");
            }, 200);

            resetArea.innerHTML = `
              <div class="reset_container">
                <div class="reset_button">
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.66742 9.90071C5.75182 6.30331 9.07255 3.58601 13.0113 2.25478C16.9501 0.923544 21.2384 1.0691 25.0778 2.66435C28.9173 4.2596 32.0461 7.19582 33.8818 10.9263C35.7174 14.6567 36.1348 18.9272 35.0562 22.9425C33.9776 26.9578 31.4765 30.4443 28.0186 32.7527C24.5607 35.0612 20.3817 36.0343 16.2597 35.4909C12.1377 34.9475 8.35372 32.9246 5.61222 29.7989C2.87072 26.6732 1.3586 22.6576 1.35742 18.5" stroke="white" stroke-width="2.14286" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.0714 9.92858H3.5V1.35715" stroke="white" stroke-width="2.14286" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                <div>
              </div>
            `;

            const resetButton = document.querySelector(".reset_button");
            resetButton.addEventListener("click", () => {
              pauseStorie.classList.remove("active");

              currentImage = 0;
              currentText = 0;
              currentProgressIndex = 0;
              currentProgress = 0;

              dotsStories.forEach(dot => {
                dot.querySelector('.progress_active').style.width = `${currentProgress}%`;
              })

              imageStories.forEach(image => {
                image.classList.remove("active")
              })

              textStories.forEach(text => {
                text.classList.remove("active")
              })

              resetArea.classList.remove("active");
              setTimeout(() => {
                resetArea.classList.remove("hidden");
              }, 200);

              clearInterval(intervalId)
            })
          }
          currentProgress = 0;
          return;
        } else if (isPause == false) {
          currentProgress += increment;
        } else if (isPause == true) {
          clearInterval(intervalId)
        }
        dotsStories[currentProgressIndex].querySelector('.progress_active').style.width = `${currentProgress}%`;
      }
    }, interval);

    intervalId()

    const updateImage = () => setInterval(() => {
      if (currentProgressIndex < dotsStories.length) {
        imageStories[currentImage].classList.add("active");
        if (currentProgress >= 100) {
          currentImage++;
          if (currentImage < dotsStories.length) {
            let lastImage = currentImage - 1;
            imageStories[lastImage].classList.remove("active");
          }
        }
      }
    }, interval)

    updateImage();

    const updateText = () => setInterval(() => {
      if (currentProgressIndex < dotsStories.length) {
        textStories[currentText].classList.add("active");
        if (currentProgress >= 100) {
          currentText++;
          if (currentText < dotsStories.length) {
            let lastText = currentText - 1;
            textStories[lastText].classList.remove("active");
          }
        }
      }
    }, interval)

    updateText();

    // pause and play stories
    pauseStorie.addEventListener("click", () => {
      if (isPause == false) {
        isPause = true
        pauseStorie.classList.add("active");
      } else {
        isPause = false
        pauseStorie.classList.remove("active");
      }
    })

    containerStories.addEventListener("mousedown", () => {
      isPause = true;
      pauseStorie.classList.add("active");
    })

    containerStories.addEventListener("mouseup", () => {
      isPause = false;
      pauseStorie.classList.remove("active");
    })


    // close stories
    const closeSlides = () => {
      containerStorie.classList.remove("active");
      setTimeout(() => {
        containerStorie.classList.remove("hidden");
        isPause == true
      }, 200);
    }
    closeButton.addEventListener("click", closeSlides);

    // BOTÃO NEXT
    const nextStorie = document.querySelector(".storie_open_next");
    nextStorie.addEventListener("click", () => {
      if (currentProgressIndex < dotsStories.length) {
        currentProgress = 100;
        dotsStories[currentProgressIndex].querySelector('.progress_active').style.width = `${currentProgress}%`;
        currentImage++
        currentText++
        if (currentImage < dotsStories.length) {
          if (currentProgressIndex >= dotsStories.length - 1) {
            currentProgressIndex--
          }
          let lastText = currentText - 1;
          let lastImage = currentImage - 1;
          textStories[lastText].classList.remove("active");
          imageStories[lastImage].classList.remove("active");
        }
      }
    });

    // BOTÃO ANTERIOR
    const prevStorie = document.querySelector(".storie_open_prev");
    prevStorie.addEventListener("click", () => {
      if (0 < currentProgressIndex < dotsStories.length) {
        currentProgress = 0;
        if (currentProgressIndex >= dotsStories.length) {
          dotsStories[currentProgressIndex - 1].querySelector('.progress_active').style.width = `${currentProgress}%`;
        } else {
          dotsStories[currentProgressIndex].querySelector('.progress_active').style.width = `${currentProgress}%`;
        }

        if (currentProgressIndex > 0) {
          dotsStories[currentProgressIndex - 1].querySelector('.progress_active').style.width = `${currentProgress}%`;
          currentProgressIndex--
          currentImage--
          currentText--

          let nextImage = currentImage + 1;
          let nextText = currentText + 1;
          if (currentProgressIndex < dotsStories.length - 1) {
            imageStories[nextImage].classList.remove("active");
            textStories[nextText].classList.remove("active");
          }
        }
      }
    });
  });
});
