class SliderView {
  #currentSlide = 0;
  #sliderSocPages = document.querySelectorAll(".soc-page");
  #sliderSocPageBackgrounds = document.querySelectorAll(".soc-img");
  #sliderBtnLeft = document.querySelector(".err--left");
  #sliderBtnRight = document.querySelector(".err--right");

  goToSlide() {
    this.#sliderSocPages.forEach((slider, i) => {
      slider.style.transform = `translateX(${100 * (i - this.#currentSlide)}%)`;
    });
  }
  goToSlideBackground() {
    this.#sliderSocPageBackgrounds.forEach((background, i) => {
      background.style.transform = `translateX(${
        100 * (i - this.#currentSlide)
      }%)`;
    });
  }

  #nextSlide() {
    if (this.#currentSlide === this.#sliderSocPages.length - 1) {
      this.#currentSlide = 0;
    } else {
      this.#currentSlide++;
    }

    this.goToSlideBackground();
    this.goToSlide();
  }

  #previousSlide() {
    if (this.#currentSlide === 0) {
      this.#currentSlide = this.#sliderSocPages.length - 1;
    } else {
      this.#currentSlide--;
    }

    this.goToSlideBackground();
    this.goToSlide();
  }

  errowClickEvents() {
    this.#sliderBtnRight.addEventListener("click", this.#nextSlide.bind(this));
    this.#sliderBtnLeft.addEventListener(
      "click",
      this.#previousSlide.bind(this)
    );
  }
}

export default new SliderView();
