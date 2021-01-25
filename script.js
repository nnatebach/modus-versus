$(document).ready(function(){
  $('.keyvisual-slider').slick({
    infinite: true,
    speed: 500,
    // centerMode: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          // centerMode: false
        }
      }
    ]
  })
})