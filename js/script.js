$('#jq').LineProgressbar({
    percentage:50,
    radius: '0px',
    height: '5px',
    fillBackgroundColor: '#270d29'
    });
    $('#html').LineProgressbar({
    percentage:80,
    radius: '0px',
    height: '5px',
    fillBackgroundColor: '#270d29'
    });
    $('#css').LineProgressbar({
    percentage:70,
    radius: '0px',
    height: '5px',
    fillBackgroundColor: '#270d29'
    });
    $('#css3').LineProgressbar({
    percentage:80,
    radius: '0px',
    height: '5px',
    fillBackgroundColor: '#270d29'
    });
    $('#css4').LineProgressbar({
    percentage:50,
    radius: '0px',
    height: '5px',
    fillBackgroundColor: '#270d29'
    });
    $('#css5').LineProgressbar({
    percentage:65,
    radius: '0px',
    height: '5px',
    fillBackgroundColor: '#270d29'
    });
    $('#css6').LineProgressbar({
    percentage:40,
    radius: '0px',
    height: '5px',
    fillBackgroundColor: '#270d29'
    });
    $('#css7').LineProgressbar({
    percentage:75,
    radius: '0px',
    height: '5px',
    fillBackgroundColor: '#270d29'
    });
    // counter up master
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // portfolio part
    var mixer = mixitup(".main");
    // Projects slider
    $('.projects-slider').slick({
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fas fa-angle-double-left prev"></i>',
        nextArrow: '<i class="fas fa-angle-double-right next"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    // testimonial slider
    $('.testi-slider').slick({
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fas fa-angle-double-left prev"></i>',
        nextArrow: '<i class="fas fa-angle-double-right next"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });