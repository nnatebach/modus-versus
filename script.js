$(document).ready(function(){
  $('.keyvisual-slider').slick({
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })
})