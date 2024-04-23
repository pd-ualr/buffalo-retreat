$(document).ready(function () {
  $(".fade").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slide: "div",
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
  });

    // the magic
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});

