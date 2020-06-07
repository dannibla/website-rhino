$(window).ready(function() {

  $(".preloaderWindow .logo").addClass("show");
  $(".preloaderWindow .line").addClass("show");
  $(".preloaderWindow .text").addClass("show");

  $(window).on('load', function() {

    $(".preloaderWindow .logo").removeClass("show");
    $(".preloaderWindow .line").removeClass("show");
    $(".preloaderWindow .text").removeClass("show");
    $(".preloaderWindow").addClass("hide");

  });

  $(window).resize();


  // var path = document.querySelector('.numberPlus');
  // alert(path.getTotalLength());


  $('#fullpage').fullpage({
    autoScrolling: false,
    fitToSection: false,
    menu: '#menu',
    anchors: ['homePage', 'whyPage', 'clientsPage', 'websitesPage', 'ourService', 'whoPage', 'contactPage'],
    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);

      if (index == 1 && direction == 'down') {
        $('.hamburger').addClass("active");
      } else if (index == 2 && direction == 'up') {
        $('.hamburger').removeClass("active");
      }
    }
  });
  var body = $("html, body");

  $('.scrollDown a').click(function() {
    $.fn.fullpage.moveSectionDown();
  });

  $('.scrollUp a, .buttonHome a, .logo a').click(function() {
    body.animate({
      scrollTop: $(".rhino").offset().top
    }, 800);
    return false;
  });

  rhinoSlider = $('.rhinoSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    focusOnSelect: false,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  $('.goToPrev').click(function() {
    $('.rhinoSlider .slick-prev').click();
  });

  $('.goToNext').click(function() {
    $('.rhinoSlider .slick-next').click();
  });

  $('.goTo3Slide').click(function() {
    rhinoSlider.slick('slickGoTo', 2);
  });

  var quoteSlider = $('.quoteSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    focusOnSelect: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 600,
      settings: {
        arrows: false
      }
    }]
  });

  // mobile menu

  $(".hamburger").click(function() {
    $(".menuMobilePopup").show(0);
    $(".menuMobilePopup").animate({
      "opacity": 1
    }, 0);
    $(".menuMobilePopupWindow").delay(0).addClass("show");
  });

  $(".menuMobilePopup a").click(function() {
    $(".menuMobilePopupWindow").removeClass("show");
    $(".menuMobilePopup").delay(200).animate({
      "opacity": 0
    }, 200);
    $(".menuMobilePopup").delay(200).hide(0);
  });

  // quote slider

  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.quoteSlider').slick('slickGoTo', slideno - 1);
  });

});

$(window).scroll(function() {

});

$(window).resize(function() {


});
