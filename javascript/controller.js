import navigationView from "./navigationView.js";
import sliderView from "./sliderView.js";
import inspirationView from "./inspirationSecView.js";

const controlNavigation = function () {
  navigationView.hideNavAfterClick();
  navigationView.hideNavForMobile();
  navigationView.stickyNav();
  navigationView.toggleBurger();
};

const controlSlider = function () {
  sliderView.goToSlide();
  sliderView.goToSlideBackground();
  sliderView.errowClickEvents();
};

const controlInspirationSec = function () {
  inspirationView.developerInfoEvent();
};

const initialization = function () {
  controlNavigation();
  controlSlider();
  controlInspirationSec();
};
initialization();
