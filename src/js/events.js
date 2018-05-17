/**
 * -- EVENTS
 */
import { viewport_width, is_in_view } from "./globals";
import { parallax } from "./parallax";
import { fitText } from "./fit-text";

// These functions execute in order
(function(){
  fitText();
})();

/* Events that fire when the page is loaded */
$(document).ready(function(){
  $('.carousel').slick({ // uses Slick Carousel
    adaptiveHeight: true
  });
}); // end document ready


/* Events that fire on window scroll */
$(window).scroll(() => {

  // parallax effect on scroll
  parallax('.js-parallax');

  parallax('.js-parallax-shape', 1090);

}); // end window scroll
