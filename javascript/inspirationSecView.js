class InspirationView {
  // DEVELOPERS
  #jonassHighlitedTxt = document.querySelector(
    ".jonas-schmidtmaann-highlited-text"
  );
  #rubensHighlitedtext = document.querySelector(
    ".rubenscantuni-highlited-text"
  );
  #krystonsHighlitedtext = document.querySelector(
    ".kryston-schwarze-highlited-text"
  );
  #mikesHighlitedtext = document.querySelector(
    ".mike-mcalister-highlited-text"
  );
  // jonas's pic and text
  #jonasImg = document.querySelector(".jonas-page-img");
  #jonasTxt = document.querySelector(".jonas-page-text");
  // ruben's pic and text
  #rubensImg = document.querySelector(".rubens-page-img");
  #rubensTxt = document.querySelector(".rubens-page-text");
  // kryston's pic and text
  #krystonImg = document.querySelector(".kryston-page-img");
  #krystonTxt = document.querySelector(".kryston-page-text");
  // jonas's pic and text
  #mikeImg = document.querySelector(".mike-page-img");
  #mikeTxt = document.querySelector(".mike-page-text");
  // show and hide all
  #pageBorder = document.querySelector(".border");
  #imagesArr = [
    this.#jonasImg,
    this.#rubensImg,
    this.#krystonImg,
    this.#mikeImg,
  ];
  #textArr = [this.#jonasTxt, this.#rubensTxt, this.#krystonTxt, this.#mikeTxt];

  #clickDeveloper(imgArr, textArr, personalImg, porsonalTxt, border) {
    if (
      // jonasImg
      personalImg.classList.contains("show--page-img") ||
      // jonasTxt
      porsonalTxt.classList.contains("show--page-text")
    ) {
      return;
    } else {
      // imagesArr
      imgArr.forEach((el) => {
        if (el.classList.contains("show--page-img")) {
          el.classList.remove("show--page-img");
        }
      });
      // textArr
      textArr.forEach((el) => {
        if (el.classList.contains("show--page-text")) {
          el.classList.remove("show--page-text");
        }
      });
    }

    if (
      personalImg.classList.contains("show--page-img") ||
      porsonalTxt.classList.contains("show--page-text")
    ) {
      return;
    } else {
      // if it's not the case add show calsses
      setTimeout(() => {
        border.classList.add("show-border");
      }, 700);

      personalImg.classList.add("show--page-img");
      porsonalTxt.classList.add("show--page-text");
    }
  }
  #jonasClick() {
    this.#clickDeveloper(
      this.#imagesArr,
      this.#textArr,
      this.#jonasImg,
      this.#jonasTxt,
      this.#pageBorder
    );
  }

  #rubensClick() {
    this.#clickDeveloper(
      this.#imagesArr,
      this.#textArr,
      this.#rubensImg,
      this.#rubensTxt,
      this.#pageBorder
    );
  }

  #kryston() {
    this.#clickDeveloper(
      this.#imagesArr,
      this.#textArr,
      this.#krystonImg,
      this.#krystonTxt,
      this.#pageBorder
    );
  }

  #mikeClick() {
    this.#clickDeveloper(
      this.#imagesArr,
      this.#textArr,
      this.#mikeImg,
      this.#mikeTxt,
      this.#pageBorder
    );
  }

  developerInfoEvent() {
    this.#jonassHighlitedTxt.addEventListener(
      "click",
      this.#jonasClick.bind(this)
    );

    this.#rubensHighlitedtext.addEventListener(
      "click",
      this.#rubensClick.bind(this)
    );

    this.#krystonsHighlitedtext.addEventListener(
      "click",
      this.#kryston.bind(this)
    );

    this.#mikesHighlitedtext.addEventListener(
      "click",
      this.#mikeClick.bind(this)
    );
  }
}

export default new InspirationView();
