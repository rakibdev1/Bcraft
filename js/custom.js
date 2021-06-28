$(function(){

    //banner-slider-js
    $('.main-banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        infinite:true,
      });
    $('.maruf').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: false,
        arrows:false,
        infinite:true,
        responsive: [
          {
            breakpoint: 991.98,
            settings: {
              slidesToShow: 4,
              dots: false,
              autoplay: false,
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 3,
              dots: false,
              autoplay: false,
            }
          },
          {
            breakpoint: 576.98,
            settings: {
              slidesToShow: 2,
              dots: false,
              autoplay: false,
            }
          },
        ]
      });
      $('.brave').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        infinite:true,
        responsive: [
          {
            breakpoint: 1200.98,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 991.98,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
      });
    $('.testimonial-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        infinite:true,
        responsive: [
          {
            breakpoint: 1199.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 991.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows:false,
              infinite:true,
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows:false,
              infinite:true,
            }
          },
          {
            breakpoint: 576.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows:false,
              infinite:true,
            }
          }
        ]
      });
      $('.testimonial-about-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.vitfive',
        autoplay:true,
        speed:2000,
        autoplaySpeed: 2000,
      });
      $('.vitfive').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-about-slide',
        centerMode: true,
        focusOnSelect: true,
        arrows:false,
        autoplay:true,
        speed:2000,
        autoplaySpeed: 2000,
      });
      
      var containerEl = document.querySelector('.Rokibul');

      var mixer = mixitup(containerEl);
      var colorSheets = [
        {
            color: "#EC7A5C",
            title: "Switch to Default",
            href: "./css/style.css"
        },
        {
            color: "#a6c76c",
            title: "Switch to lightgreen",
            href: "./css/color-light-green.css"
        },
        {
            color: "#6666ff",
            title: "Switch to lightgreen",
            href: "./css/color-blue.css"
        },
    ];
    
    ColorSwitcher.init(colorSheets);

    

});