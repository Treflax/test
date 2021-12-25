$(document).ready(function(){
    $('.content').slick({
        slidesPerView: "auto",
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        stopOnLastSlide: true,
        disableOnInteraction: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 998,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 540,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 425,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 375,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 320,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 1
            }
          },
        ]
    });
});