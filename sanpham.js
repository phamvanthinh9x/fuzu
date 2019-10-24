$(document).on('ready', function() {
       $('.slider-for-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for-2',
        centerMode: true,
        focusOnSelect: true,
        arrows:false,
      });


      $('.slider-for-3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav-3'
      });
      $('.slider-nav-3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for-3',
        centerMode: true,
        focusOnSelect: true,
        arrows:false,
      });
    });