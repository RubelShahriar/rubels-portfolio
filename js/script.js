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
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 575,
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
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 575,
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
//type js=============================================//
$(function(){
	$(".typed").typed({
		strings: ["Developers.", "Designers.", "People."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

//type js=============================================//
function showAlert(){
  alert('thank you!')
}