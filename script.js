$(document).ready(function(){
  $('.js-header-slider').slick({
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false
        }
      }
    ]
  })
  $('.js-client-slider').slick({
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 2
        }
      }
    ]
  })
})