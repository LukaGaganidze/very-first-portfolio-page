class NavigationView {
  #burger = document.querySelector(".burger");
  #section1 = document.querySelector(".sec-1-text-box");
  #navlinkBoxes = document.querySelectorAll(".nav-link--box");
  #body = document.querySelector("body");
  #resNav = document.querySelector(".nav-links");

  hideNavForMobile() {
    if (this.#body.getBoundingClientRect().width < 894) {
      this.#resNav.classList.add("displauNon");
    }
  }
  hideNavAfterClick() {
    if (this.#body.getBoundingClientRect().width < 894) {
      this.#navlinkBoxes.forEach((link) => {
        link.addEventListener("click", function () {
          if (
            !document
              .querySelector(".nav-links")
              .classList.contains("displauNon")
          ) {
            document.querySelector(".nav-links").classList.add("displauNon");
          }
        });
      });
    }
  }
  toggleBurger() {
    this.#burger.addEventListener("click", function () {
      document.querySelector(".nav-links").classList.toggle("displauNon");
    });
  }

  stickyNav() {
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(function intersectionCallback(
      entry
    ) {
      if (!entry[0].isIntersecting) {
        document.querySelector(".navigation--bar").classList.add("sticky");
      }
      if (entry[0].isIntersecting) {
        document.querySelector(".navigation--bar").classList.remove("sticky");
      }
    },
    options);
    observer.observe(this.#section1);
  }
}

export default new NavigationView();
